import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const ManageRestaurantCard = ({ restaurant }) => {
    return (
    <div className="relative h-[180px] rounded-xl overflow-hidden shadow-lg w-full mx-auto">
        <div className="absolute inset-0">
        <img
            src={restaurant.banner}
            alt="Restaurant banner"
            className="w-full h-full object-cover"
        />
        </div>

        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 flex items-center justify-between p-4 h-full">
        <div className="flex items-center h-full">
            <div className="mr-4 flex items-center h-full">
            <img
                src={restaurant.logo}
                alt="Restaurant logo"
                className="w-24 h-24 rounded-full object-cover border-2 border-white"
            />
            </div>

            <div className="text-white flex flex-row gap-24 justify-center items-center h-full">
            <h3 className="text-2xl font-semibold">{restaurant.name}</h3>
                <div className="flex items-center space-x-2 mt-1">
                    
                    <span className="text-xl font-semibold">{restaurant.rating}</span>
                    <FaStar className="text-project-orange" />
                    <span className="text-lg">(+{restaurant.reviews} reviews)</span>
                </div>
            </div>
        </div>

        <div className="flex items-center space-x-4 h-full">
            <button className="text-red-600 text-xl font-semibold">Delete</button>

            <button className="border border-project-orange bg-transparent text-xl text-white px-4 py-1 rounded-full hover:bg-project-orange">
            Orders
            </button>

            <button className="border border-project-orange bg-transparent text-xl text-white px-4 py-1 rounded-full hover:bg-project-orange">
            Manage
            </button>
        </div>
        </div>
    </div>
    );
};

ManageRestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    reviews: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired,
  }).isRequired,
};

export default ManageRestaurantCard;
