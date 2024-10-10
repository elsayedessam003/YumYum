import { useState, useRef, useEffect } from "react";
import { MdDeliveryDining } from "react-icons/md";
import PropTypes from "prop-types";

RestaurantCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  fee: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  profileImgSrc: PropTypes.string.isRequired,
};

function RestaurantCard({
  name,
  rating,
  reviews,
  time,
  fee,
  imgSrc,
  profileImgSrc,
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [inside, setInside] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseEnter = () => {
      setInside(true);
    };

    const handleMouseLeave = () => {
      setInside(false);
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const gradientBackground = inside
    ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(252, 98, 12, 0.1), rgba(255, 255, 255, 1))`
    : "white";

  return (
    <div
      className={"bg-white rounded-lg overflow-hidden group"}
      style={{
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: inside
          ? "0 10px 20px rgba(0, 0, 0, 0.25)"
          : "0 4px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        ref={cardRef}
        className="relative flex flex-col items-start gap-[23px] p-4 cursor-pointer transition-all ease-linear flex-grow "
        onMouseMove={handleMouseMove}
        style={{
          background: gradientBackground,
          transition: "transform 0.3s ease",
        }}
      >
        <div className="relative self-stretch">
          <img
            src={imgSrc}
            alt={name}
            className="h-[225px] w-full rounded-[10px] object-cover object-center"
            style={{ pointerEvents: "none" }}
          />
        </div>

        <div className="flex items-center gap-[9px] self-stretch">
          <img
            src={profileImgSrc}
            alt={`${name} profile`}
            className="w-[62px] h-[62px] rounded-full object-cover"
          />

          <div className="flex w-full flex-col items-start gap-1">
            <div className="flex justify-between w-full">
              <h3 className="text-lg font-semibold">{name}</h3>
              <div className="flex items-center text-lg">
                <span className="mr-2">★ {rating}</span>
                <span>(+{reviews})</span>
              </div>
            </div>

            <div className="flex items-center text-gray-500 mt-1">
              <MdDeliveryDining className="mr-2" />
              <span className="mr-2">{time} min</span>
              <span>• {fee}£ Fee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
