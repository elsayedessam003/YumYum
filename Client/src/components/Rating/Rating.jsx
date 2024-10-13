import PropTypes from "prop-types";
import Star from "./Star.jsx";

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
  className: PropTypes.string,
};

function Rating({ rating, setRating, className }) {
  return (
    <div className={`text-white flex ${className}`}>
      {getStars(rating, setRating)}
    </div>
  );
}

function getStars(rating, setRating) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star id={i + 1} rating={rating} setRating={setRating} key={i} />,
    );
  }
  return stars;
}

export default Rating;