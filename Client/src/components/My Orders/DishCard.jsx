import PropTypes from "prop-types";

const DishCard = ({ dish }) => {
  const { image, name, description, quantity, price } = dish;

  return (
    <div className="grid grid-cols-4 gap-16 items-center justify-between py-4 border-b">
      <div className="flex gap-4 items-center col-span-2">
        <img
          src={image}
          alt={name}
          className="w-20 aspect-square rounded-md object-cover"
        />
        <div className="flex flex-col w-full">
          <p className="text-xl font-medium">{name}</p>
          <p className="text-lg text-black/40 truncate">{description}</p>
        </div>
      </div>

      <p className="flex text-lg font-bold justify-center">x{quantity}</p>
      <p className="flex text-lg text-black/70 font-medium justify-end">
        <span className={"font-bold"}>£</span>
        {price}
      </p>
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
