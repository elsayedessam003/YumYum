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

  const [restaurants, setRestaurants] = useState([]);

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
