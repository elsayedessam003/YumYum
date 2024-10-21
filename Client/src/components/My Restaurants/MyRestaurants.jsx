import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { BiPlusCircle } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import ManageRestaurantCard from "./ManageRestaurantCard";
import ProfileSection from "../MainContent/ProfileSection.jsx";
import Button from "../Button/Button.jsx";
import RestaurantCreation from "../RestaurantCreation/RestaurantCreation.jsx";
import ManageOrdersPage from "./ManageOrdersPage";

const MyRestaurants = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [isManagingOrders, setIsManagingOrders] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  function handleCreating() {
    setIsCreating((currentValue) => !currentValue);
  }

  function handleManagingOrders(restaurant) {
    setSelectedRestaurant(restaurant);
    setIsManagingOrders(true);
  }

  const [restaurants, setRestaurants] = useState([
    {
      _id: {
        $oid: "670ec416914b9e4ee1633cba",
      },
      address: {
        city: "Flavortown",
        street: "100 Fusion St.",
      },
      deliveryTime: 32,
      rating: 4.1,
      description: "Fusion cuisine that will surprise you.",
      ratingCount: 80,
      contact: "+201012345010",
      name: "Global Eats",
      deliverFees: 12,
      backgroundImgUrl:
        "https://res.cloudinary.com/dankzozus/image/upload/v1729013532/mnnulz459mazgfe8f6so.jpg",
      profileImgUrl:
        "https://res.cloudinary.com/dankzozus/image/upload/v1729013531/tpsssasz7c0nfqkx81tu.jpg",
      openingHours: 10,
      closingHours: 22,
    },
    {
      _id: {
        $oid: "670ec416914b9e4ee1633cbb",
      },
      address: {
        city: "Mealville",
        street: "70 Dine Lane",
      },
      deliveryTime: 26,
      rating: 4.7,
      description: "Handmade pasta dishes you’ll love.",
      ratingCount: 400,
      contact: "+201012345011",
      name: "Pasta Paradise",
      deliverFees: 10,
      backgroundImgUrl:
        "https://res.cloudinary.com/dankzozus/image/upload/v1729013532/mnnulz459mazgfe8f6so.jpg",
      profileImgUrl:
        "https://res.cloudinary.com/dankzozus/image/upload/v1729013531/tpsssasz7c0nfqkx81tu.jpg",
      openingHours: 10,
      closingHours: 22,
    },
  ]);

  useEffect(() => {}, [restaurants]);

  return (
    <>
      {isManagingOrders ? (
        <ManageOrdersPage restaurant={selectedRestaurant} />
      ) : !isCreating ? (
        <ProfileSection
          icon={<GiKnifeFork />}
          text={"Restaurants List"}
          className={"flex flex-col gap-8"}
        >
          <div className="flex flex-col gap-8">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="w-full flex justify-center">
                <ManageRestaurantCard
                  restaurant={restaurant}
                  onManageOrders={() => handleManagingOrders(restaurant)}
                  className="w-11/12"
                />
              </div>
            ))}
          </div>

          <Button
            variant={"outline"}
            className={
              "w-full py-6 flex items-center gap-4 rounded-xl font-medium"
            }
            onClick={handleCreating}
          >
            <BiPlusCircle className={"text-4xl"} />{" "}
            <p className={"text-2xl"}>Add a new restaurant</p>
          </Button>
        </ProfileSection>
      ) : (
        <RestaurantCreation />
      )}
    </>
  );
};

const restaurantShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
});

MyRestaurants.propTypes = {
  restaurants: PropTypes.arrayOf(restaurantShape),
};

export default MyRestaurants;
