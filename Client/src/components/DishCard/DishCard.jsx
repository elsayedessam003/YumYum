import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";

const DishCard = ({ id, name, description, price, image, setProduct }) => {
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

  function handleProduct() {
    setProduct({
      id,
      name: name,
      content: description,
      price: price,
      imageUrl: image,
    });
  }

  return (
    <div
      className="lg:h-[174px] flex justify-end items-center px-4 py-4 lg:p-[15px_15px_15px_34px] rounded-[30px] border border-black/10 bg-[rgba(252,98,12,0.07)] bg-white hover:shadow-lg transition-shadow self-stretch cursor-pointer group lg:min-w-[604px]"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={{
        background: gradientBackground,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: inside
          ? "0 10px 20px rgba(0, 0, 0, 0.1)"
          : "0 4px 10px rgba(0, 0, 0, 0.05)",
      }}
      onClick={handleProduct}
    >
      <div className="lg:ml-4 flex-grow">
        <h3 className="lg:text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 font-sans text-sm lg:text-[16px] font-normal leading-[155.275%]">
          {description}
        </p>
        <p className="text-gray-800 font-bold mt-2 text-[0.9rem] lg:text-base">
          £{price}
        </p>
      </div>

      <div className="rounded-[15px] object-cover object-center overflow-hidden relative aspect-square w-[10rem] lg:w-[145px]">
        <img className="object-cover w-full h-full" src={image} alt={name} />

        <div
          className={
            "absolute top-0 bg-black bg-opacity-20 w-full h-full opacity-0 group-hover:opacity-100 transition-all ease-linear"
          }
        ></div>

        <div
          className={
            "absolute top-100 left-1/2 -translate-x-1/2 bg-project-orange border-2 aspect-square p-4 rounded-full border-white text-white text-2xl group-hover:top-1/2 group-hover:-translate-y-1/2 transition-all ease-linear"
          }
        >
          <FaPlus />
        </div>
      </div>
    </div>
  );
};

DishCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  setProduct: PropTypes.func.isRequired,
};

export default DishCard;
