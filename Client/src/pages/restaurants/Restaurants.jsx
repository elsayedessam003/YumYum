import RestaurantsFilterSection from "../../components/RestaurantsFilterSection/RestaurantsFilterSection.jsx";
import RestaurantCard from "../../components/Restaurant Card/RestaurantCard.jsx";
import { BsDot } from "react-icons/bs";
import SliderItem from "../../components/Slider/SliderItem.jsx";
import { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider.jsx";
import axios from "axios";
import Edge from "../../components/Edge/Edge.jsx";
import FloatingButton from "../../components/FloatingButton/FloatingButton.jsx";
import { IoMdSettings } from "react-icons/io";
import { useParams } from "react-router-dom";

function Restaurants() {
  const PAGE_LIMIT = 21;

  const { city } = useParams();
  const [cityName, setCityName] = useState(city);
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(0);

  useEffect(() => {
    axios.get("/Categories.json").then((res) => {
      setCategories(res.data);
    });
  }, []);

  useEffect(() => {
    async function getRestaurants() {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/restaurants",
          { params: { page: currentPage, limit: PAGE_LIMIT } },
        );
        if (res.status === 200) {
          setRestaurants(res.data.data.restaurants);
        }
      } catch (e) {
        console.error(e.message);
      }
    }

    async function getPageNumber() {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/restaurants");
        if (res.status === 200) {
          const numb = res.data.data.restaurants.length;
          console.log(numb);
          setMaxPageNumber(Math.ceil(numb / PAGE_LIMIT));
        }
      } catch (e) {
        console.error(e.message);
      }
    }

    getRestaurants();
    getPageNumber();
  }, [currentPage]);

  function getPagination() {
    const temp = [];

    for (let i = 1; i <= maxPageNumber; i++) {
      temp.push(<SliderItem label={String(i)} value={i}></SliderItem>);
    }

    return temp;
  }

  return (
    <div
      className={
        "grid lg:grid-cols-[min-content_auto] grid-rows-[min-content_auto] relative"
      }
    >
      <div
        className={
          "hidden lg:block lg:row-span-4 w-fit h-full border-r relative"
        }
      >
        <RestaurantsFilterSection />
      </div>

      <FloatingButton
        placeHolder={
          <IoMdSettings className={"text-2xl text-project-orange"} />
        }
      >
        <RestaurantsFilterSection />
      </FloatingButton>

      <div
        style={{ backgroundImage: "url('/CategoriesBackground.svg')" }}
        className={
          "lg:row-span-1 hidden lg:flex h-[30rem] bg-no-repeat bg-cover p-[5rem] flex-col gap-[5rem] w-full overflow-hidden"
        }
      >
        <section className={"hidden lg:flex text-5xl font-bold text-white"}>
          <p>
            Choose your favourite{" "}
            <span className={"text-project-orange"}>Category</span>!
          </p>
        </section>

        <Slider
          choice={category}
          setChoice={setCategory}
          className={"min-h-[12rem] w-full"}
        >
          {categories.map((item) => {
            return (
              <SliderItem
                label={item.label}
                icon={item.icon}
                value={item.value}
                key={item.value}
              />
            );
          })}
        </Slider>
      </div>

      {/*for responsive*/}
      <div
        className={
          "w-screen px-4 lg:hidden pt-6 sticky top-[97px] bg-white z-10 pb-6"
        }
      >
        <Slider
          choice={category}
          setChoice={setCategory}
          className={"w-full"}
          variant={"text"}
        >
          {categories.map((item) => {
            return (
              <SliderItem
                label={item.label}
                value={item.value}
                key={item.value}
              />
            );
          })}
        </Slider>
      </div>

      <div
        className={
          "lg:row-span-1 flex items-center gap-4 font-semibold text-2xl lg:text-4xl px-4 lg:px-8 py-6 lg:py-12 max-lg:justify-center"
        }
      >
        <p>Restaurants</p>
        <BsDot className={"font-normal text-lg lg:text-xl"} />
        <section className={"font-normal text-xl lg:text-2xl"}>
          {restaurants.length} results
        </section>
      </div>

      <div
        className={
          "lg:row-span-1 grid justify-normal grid-cols-[repeat(auto-fill,minmax(360px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-4 px-3 lg:px-8"
        }
      >
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={
              "rounded-lg p-1 overflow-hidden relative hover:scale-105 transition-all ease-linear"
            }
          >
            <RestaurantCard
              restaurant={restaurant}
              isHovered={index === hoveredIndex}
              isNextHovered={index === hoveredIndex + 1}
              isPrevHovered={index === hoveredIndex - 1}
            />
            <Edge />
          </div>
        ))}
      </div>

      <div className={"row-span-1 flex justify-center"}>
        <Slider
          choice={currentPage}
          setChoice={setCurrentPage}
          variant={"text"}
          className={"max-w-[50%] lg:max-w-[25%] w-min p-8"}
        >
          {getPagination()}
        </Slider>
      </div>
    </div>
  );
}

export default Restaurants;
