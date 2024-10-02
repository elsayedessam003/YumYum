import RestaurantsFilterSection from "../../components/RestaurantsFilterSection/RestaurantsFilterSection.jsx";
import RestaurantCard from "../../components/Restaurant Card/RestaurantCard.jsx";
import { BsDot } from "react-icons/bs";
import SliderItem from "../../components/Slider/SliderItem.jsx";
import { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider.jsx";
import axios from "axios";

function Restaurants() {
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    axios.get("/Categories.json").then((res) => {
      setCategories(res.data);
    });
  }, []);

  const restaurantCards = new Array(12).fill({
    name: "Potato",
    fee: 9.99,
    imgSrc: "/public/Frame 48.png",
    profileImgSrc: "/public/Ellipse 5.png",
    rating: 4.2,
    reviews: 200,
    time: 22,
  });

  return (
    <div className={"flex h-full"}>
      <div className={"w-1/4 min-w-[20rem] h-full min-h-full"}>
        <RestaurantsFilterSection />
      </div>

      <div className={"w-full overflow-hidden border-l "}>
        <div
          style={{ backgroundImage: "url('/CategoriesBackground.svg')" }}
          className={
            "h-[30rem] bg-no-repeat bg-cover p-20 flex flex-col gap-[7rem] w-full"
          }
        >
          <section className={"flex text-5xl font-bold text-white"}>
            <p>
              Choose your favourite{" "}
              <span className={"text-project-orange"}>Category</span>!
            </p>
          </section>

          <Slider
            choice={category}
            setChoice={setCategory}
            className={"h-1/2 w-full"}
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

        <div
          className={
            "flex items-center gap-4 font-semibold text-4xl px-4 py-12"
          }
        >
          <p>Restaurants</p>
          <BsDot className={"font-normal text-xl"} />
          <section className={"font-normal text-2xl"}>9 results</section>
        </div>

        <div
          className={
            "grid justify-normal grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-4 "
          }
        >
          {restaurantCards.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <RestaurantCard
                {...card}
                isHovered={index === hoveredIndex}
                isNextHovered={index === hoveredIndex + 1}
                isPrevHovered={index === hoveredIndex - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Restaurants;
