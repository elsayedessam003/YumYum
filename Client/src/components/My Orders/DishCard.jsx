import PropTypes from "prop-types";

const DishCard = ({ dish }) => {
const { image, name, description, quantity, price } = dish;

return (
<div className="grid grid-cols-3 items-center justify-between py-4 border-b">
    <div className="flex gap-2 items-center">
        <img src={image} alt={name} className="w-20 aspect-square rounded-md"/>
        <div className="flex flex-col">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-lg text-gray-500">{description}</p>
        </div>
    </div>

    <p className="flex text-xl font-bold justify-center">x{quantity}</p>
    <p className="flex text-lg justify-end">£{price}</p>

</div>
);
};

DishCard.propTypes = {
dish: PropTypes.shape({
image: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
description: PropTypes.string.isRequired,
quantity: PropTypes.number.isRequired,
price: PropTypes.number.isRequired,
}).isRequired,
};

export default DishCard;