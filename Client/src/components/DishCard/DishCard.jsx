import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const DishCard = ({ name, description, price, image }) => {
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
    ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(252, 98, 12, 0.2), rgba(255, 255, 255, 1))`
    : "white";

    return (
    <div
        className="w-[604px] h-[174px] flex justify-end items-center p-[15px_15px_15px_34px] rounded-[30px] border border-black/10 bg-[rgba(252,98,12,0.07)] bg-white hover:shadow-lg transition-shadow"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        style={{
        background: gradientBackground,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: inside
            ? "0 10px 20px rgba(0, 0, 0, 0.25)"
            : "0 4px 10px rgba(0, 0, 0, 0.05)",
        }}
    >

        <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 font-sans text-[16px] font-normal leading-[155.275%]">{description}</p>
        <p className="text-gray-800 font-bold mt-2">£{price}</p>
        </div>

        <div className="w-[145px] h-[145px] rounded-[15px] object-cover object-center">
        <img
            className="object-cover w-full h-full rounded-[15px]"
            src={image}
            alt={name}
        />
        </div>
    </div>
    );
};

DishCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default DishCard;
