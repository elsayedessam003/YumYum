import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import RestaurantSection from "../../components/RestaurantSection.jsx";
import Hours from "../../components/Hours.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import SliderItem from "../../components/Slider/SliderItem.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import DishCard from "../../components/DishCard/DishCard.jsx";
import OrderPrepare from "../../components/OrderPrepare.jsx";
import Rating from "../../components/Rating/Rating.jsx";
import axioIinstance from "../../config/axios.instance.js";

Restaurant.propTypes = {};

function Restaurant() {
  const [category, setCategory] = useState("Top dishes");
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState(0);
  const { city, restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function getRestaurant() {
      try {
        const res = await axioIinstance.get(`restaurants/${restaurantId}`);

        setRestaurant(res.data.data.restaurant);
      } catch (e) {
        console.error(e.message);
      }
    }

    async function getDishes() {
      try {
        const { status, data } = await axioIinstance.get(`dishes`, {
          params: { restaurantId: restaurantId },
        });

        setDishes(data.data.dishes);
      } catch (e) {
        console.error(e.message);
      }
    }

    getRestaurant();
    getDishes();
  }, []);

  return (
    <>
      {restaurant.name && (
        <div className="relative">
          {product.name && (
            <OrderPrepare
              id={product.id}
              restaurantId={restaurantId}
              name={product.name}
              content={product.content}
              price={product.price}
              imageUrl={product.imageUrl}
              setProduct={setProduct}
            />
          )}

          <div className="flex gap-4 px-8 py-8">
            <Link
              to={"/"}
              className="text-project-orange underline underline-offset-4"
            >
              Home
            </Link>
            {"  "}/{" "}
            <Link
              to={`/${city}`}
              className="text-project-orange underline underline-offset-4"
            >
              {city}
            </Link>
            {"  "}/ <p>{restaurant.name}</p>
          </div>

          <div className="relative w-full h-fit">
            <img
              src={`${restaurant.backgroundImgUrl}`}
              alt={`${restaurant.name}'s image`}
              className="max-h-[15rem] lg:h-fit w-full object-cover"
            />
            <div className="absolute w-full h-full bg-black bg-opacity-50 top-0"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center gap-2 lg:gap-8 min-w-[20rem] lg:min-w-fit">
              <img
                src={`${restaurant.profileImgUrl}`}
                alt={`${restaurant.name}'s image`}
                className="border-2 border-white rounded-full max-lg:flex justify-start max-lg:scale-75 w-[110px]"
              />

              <div className="flex flex-col gap-2 group text-nowrap">
                <p className="text-white flex items-center font-extrabold text-2xl lg:text-3xl">
                  {restaurant.name}
                </p>

                <div className="text-white flex flex-col items-center gap-1 max-lg:text-sm">
                  <div className="flex gap-1 items-center lg:group-hover:invisible">
                    <p className={"lg:group-hover:invisible"}>
                      {restaurant.rating}
                    </p>
                    <FaStar className="text-project-orange lg:group-hover:invisible" />
                    <p className="text-white text-opacity-70 lg:group-hover:invisible max-lg:w-fit">
                      (+{restaurant.ratingCount} reviews)
                    </p>
                  </div>

                  <Rating
                    setRating={setRating}
                    rating={rating}
                    className={
                      "invisible group-hover:visible lg:absolute max-lg:visible"
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <RestaurantSection
            sectionName={"Restaurant Info"}
            className={"flex flex-col gap-8"}
          >
            <p className="text-lg">{restaurant.description}</p>
            <div className="flex flex-col gap-4">
              <Hours
                openingHour={restaurant.openingHours}
                closingHour={restaurant.closingHours}
              />

              <div className="flex items-center gap-2 text-black/60">
                <FaLocationDot className="text-xl min-w-fit" />
                <p>
                  {restaurant.address.street}, {restaurant.address.city}
                </p>
              </div>

              <div className="flex items-center gap-2 text-black/60">
                <FaPhoneAlt className="text-xl min-w-fit" />
                <p>{restaurant.contact}</p>
              </div>
            </div>
          </RestaurantSection>

          <RestaurantSection
            sectionName={"Menu"}
            className={
              "hidden lg:flex items-center gap-5 bg-white sticky top-[106.59px] z-10 border-b max-lg:flex-col justify-start"
            }
          >
            <Slider
              variant={"text"}
              choice={category}
              setChoice={setCategory}
              className={"flex-[2]"}
            >
              {Object.keys(restaurant.categories).map((item) => {
                return <SliderItem label={item} value={item} key={item} />;
              })}
            </Slider>

            <div className={"flex-[1] z-0"}>
              <SearchBar
                placeHolder={"Search dishes"}
                search={search}
                setSearch={setSearch}
              />
            </div>
          </RestaurantSection>

          {/* for responsive  */}
          <RestaurantSection
            className={
              "lg:hidden flex flex-col items-center gap-5 pt-0 bg-white sticky top-[95px] lg:top-[106.59px] z-10 border-b  justify-start max-lg:items-start"
            }
          >
            <div className={" z-0 w-full "}>
              <SearchBar
                placeHolder={"Search dishes"}
                search={search}
                setSearch={setSearch}
              />
            </div>

            <Slider
              variant={"text"}
              choice={category}
              setChoice={setCategory}
              className={""}
            >
              {Object.keys(restaurant.categories).map((item) => {
                return <SliderItem label={item} value={item} key={item} />;
              })}
            </Slider>
          </RestaurantSection>

          <RestaurantSection
            sectionName={"Top Dishes"}
            className={"flex flex-col gap-16"}
          >
            <div className="grid lg:grid-cols-[repeat(auto-fill,minmax(614px,1fr))] gap-4">
              {dishes.map((dish, index) => (
                <DishCard
                  key={index}
                  id={dish._id}
                  name={dish.name}
                  description={dish.description}
                  price={dish.price}
                  image={dish.imageUrl}
                  setProduct={setProduct}
                />
              ))}
            </div>
          </RestaurantSection>
        </div>
      )}
    </>
  );
}

export default Restaurant;
