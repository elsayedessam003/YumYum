import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import RestaurantSection from "../../components/RestaurantSection.jsx";
import Hours from "../../components/Hours.jsx";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Slider from "../../components/Slider/Slider.jsx";
import SliderItem from "../../components/Slider/SliderItem.jsx";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";

Restaurant.propTypes = {};

function Restaurant() {
  const [category, setCategory] = useState("Top dishes");
  const [search, setSearch] = useState("");

  const restaurantData = {
    name: "Burger Queen",
    rating: 4.2,
    reviews: 200,
    description:
      "We are a very good restaurant, we specialize in making the best dishes you will ever see, with our incredible variety of dishes and we welcome you any time to experience the unique taste of our products",
    openingHour: 11,
    closingHour: 22,
    address:
      "Building 93 El Merghany St., Heliopolis, next to Almaza Central, below Nour Al Hayat Eye Hospital",
    phoneNumber: "0122274728",
    categories: [
      "Top dishes",
      "Meat",
      "Chicken",
      "Drinks",
      "Vegetarian",
      "Seafood",
      "Desserts",
      "Appetizers",
      "Salads",
      "Soups",
      "Breakfast",
      "Pasta",
      "Pizza",
      "Vegan",
      "Sides",
      "Grill",
      "Sandwiches",
      "Sauces",
      "Snacks",
      "Burgers",
    ],
  };

  return (
    <div>
      <div className={"flex gap-4 px-32 py-8"}>
        <Link
          to={"/"}
          className={"text-project-orange underline underline-offset-4"}
        >
          Home
        </Link>
        {"  "}/{" "}
        <Link
          to={`/restaurants`}
          className={"text-project-orange underline underline-offset-4"}
        >
          Ismailia
        </Link>
        {"  "}/ <p>{restaurantData.name}</p>
      </div>

      <div className={"w-screen h-fit relative"}>
        <img
          src={"/Frame 61.png"}
          alt={`${restaurantData.name}'s image`}
          className={"w-full -z-10"}
        />

        <div
          className={"absolute w-full h-full bg-black bg-opacity-20 top-0"}
        ></div>

        <div
          className={
            "absolute z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center gap-8"
          }
        >
          <img
            src={"/Ellipse 6.png"}
            alt={`${restaurantData.name}'s image`}
            className={"border-2 border-white rounded-full row-span-2"}
          />

          <div className={"flex flex-col gap-2"}>
            <p
              className={"text-white flex items-center font-extrabold text-3xl"}
            >
              {restaurantData.name}
            </p>

            <div className={"text-white flex items-center gap-1"}>
              <p>{restaurantData.rating}</p>
              <FaStar className={"text-project-orange"} />
              <p className={"text-white text-opacity-70"}>
                (+{restaurantData.reviews} reviews)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Restaurant Info*/}
      <RestaurantSection
        sectionName={"Restaurant Info"}
        className={"flex flex-col gap-8"}
      >
        <p className={"text-lg"}>{restaurantData.description}</p>

        <div className={"flex flex-col gap-4"}>
          <Hours
            openingHour={restaurantData.openingHour}
            closingHour={restaurantData.closingHour}
          />

          <div className={"flex items-center gap-2 text-black/60"}>
            <FaLocationDot className={"text-xl"} />
            <p>{restaurantData.address}</p>
          </div>

          <div className={"flex items-center gap-2 text-black/60"}>
            <FaPhoneAlt className={"text-xl"} />
            <p>{restaurantData.phoneNumber}</p>
          </div>
        </div>
      </RestaurantSection>

      <RestaurantSection sectionName={"Menu"} className={"flex gap-20"}>
        <Slider
          variant={"text"}
          choice={category}
          setChoice={setCategory}
          className={"flex-[2]"}
        >
          {restaurantData.categories.map((item) => {
            return <SliderItem label={item} value={item} key={item} />;
          })}
        </Slider>

        <div className={"flex-[1]"}>
          <SearchBar
            placeHolder={"Search dishes"}
            search={search}
            setSearch={setSearch}
          />
        </div>
      </RestaurantSection>
    </div>
  );
}

export default Restaurant;
