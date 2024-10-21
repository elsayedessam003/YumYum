import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider.jsx";
import axiosInstance from "../../config/axios.instance.js";
import { toast } from "react-hot-toast";

Star.propTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};

function Star({ id, rating, reviewId, setRating, restaurantId }) {
  const { user, token } = useContext(UserContext);

  async function handleClick() {
    if (!reviewId) {
      try {
        const reviewData = {
          restaurantId: restaurantId,
          userId: user._id,
          rating: id,
          review: "",
        };

        const { status, data } = await axiosInstance.post(
          "reviews",
          reviewData,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        if (199 < status <= 299) {
          toast.success("Review added!");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const reviewData = {
          restaurantId: restaurantId,
          userId: user._id,
          rating: id,
          review: "",
        };

        const { status, data } = await axiosInstance.put(
          `reviews/${reviewId}`,
          reviewData,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        if (199 < status <= 299) {
          toast.success("Review updated!");
        }
      } catch (e) {
        console.log(e);
      }
    }
    setRating(id);
  }

  return (
    <FaStar
      className={`${id <= rating ? "text-project-orange" : "text-white"} hover:scale-125 cursor-pointer transition-colors ease-linear`}
      onClick={handleClick}
    />
  );
}

export default Star;
