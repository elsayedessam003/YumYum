import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import Button from "../Button/Button.jsx";

const ManageRestaurantCard = ({ restaurant, onManageOrders }) => {
  return (
    <div className="relative h-[11rem] rounded-xl overflow-hidden w-full">
      <div className="absolute inset-0">
        <img
          src={restaurant.backgroundImgUrl}
          alt={`${restaurant}'s banner image`}
          className="w-full h-full object-cover "
        />

        <div className="absolute inset-0 bg-black opacity-70 w-full h-full"></div>
      </div>

      <div className="relative z-10 flex items-center justify-between p-12 h-full">
        <div className="flex items-center gap-4">
          <img
            src={restaurant.profileImgUrl}
            alt={`${restaurant}'s logo`}
            className="w-24 aspect-square rounded-full border-2 border-white"
          />

          <p className="text-2xl font-semibold text-white">{restaurant.name}</p>
        </div>

        <div className="flex items-center text-white gap-1">
          <span className="text-xl font-medium">{restaurant.rating}</span>
          <FaStar className="text-project-orange text-2xl" />
          <span className="text-lg">(+{restaurant.ratingCount} reviews)</span>
        </div>

        <div className="flex items-center space-x-4 h-full">
          <Button
            variant={"text"}
            className={
              "text-project-red hover:text-project-red/80 font-semibold"
            }
          >
            Delete
          </Button>

          {/*<Button color={"white"} rounding={"full"} onClick={onManageOrders}>*/}
          {/*  Orders*/}
          {/*</Button>*/}

          {/*<Button color={"white"} rounding={"full"}>*/}
          {/*  Manage*/}
          {/*</Button>*/}
        </div>
      </div>
    </div>
  );
};

ManageRestaurantCard.propTypes = {
  restaurant: PropTypes.object.isRequired,
  onManageOrders: PropTypes.func.isRequired,
};

export default ManageRestaurantCard;
