import PropTypes from "prop-types";
import DishCard from "./DishCard";
import Button from "../Button/Button.jsx";
import { MdOutlineStarBorder } from "react-icons/md";
import OrderStatus from "./OrderStatus.jsx";

const ViewOrderCard = ({ order }) => {
  const {
    restaurantName,
    restaurantImage,
    orderId,
    date,
    status,
    totalAmount,
    dishes,
  } = order;

  return (
    <div className="rounded-lg">
      <div className="flex items-center justify-between">
        <div className="h-28 flex gap-4 items-center">
          <img
            src={restaurantImage}
            alt={restaurantName}
            className="w-20 aspect-square rounded-full object-cover"
          />
          <div className="h-20 flex flex-col justify-around">
            <h2 className="text-2xl font-bold">{restaurantName}</h2>
            <p className="text-lg text-black/60">
              Order ID: #{orderId} • {date}
            </p>
          </div>
        </div>

        <OrderStatus status={"pending"} />
      </div>

      <div>
        {dishes.map((dish, index) => (
          <DishCard key={index} dish={dish} />
        ))}
      </div>

      <div className="flex justify-between items-center pt-6">
        <div className={"flex gap-8"}>
          <p className="font-medium text-lg text-black/65">TOTAL </p>
          <p className={"font-bold text-xl"}>£{totalAmount}</p>
        </div>

        <Button color={"white"} rounding={"full"} className={"py-3"}>
          Order Again
        </Button>
      </div>
    </div>
  );
};

ViewOrderCard.propTypes = {
  order: PropTypes.shape({
    restaurantName: PropTypes.string.isRequired,
    restaurantImage: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    totalAmount: PropTypes.number.isRequired,
    dishes: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default ViewOrderCard;
