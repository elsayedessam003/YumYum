import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

Star.propTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};

function Star({ id, rating, setRating }) {
  function handleClick() {
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
