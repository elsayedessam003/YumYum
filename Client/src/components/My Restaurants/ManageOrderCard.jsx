import PropTypes from "prop-types";
import DishCard from "../My Orders/DishCard.jsx";
import Button from "../Button/Button.jsx";
import { useState } from "react";
import OrderNotesCard from "./OrderNotesCard.jsx";
import OrderStatus from "../My Orders/OrderStatus.jsx";

const ManageOrderCard = ({ order, onReadyForDelivery }) => {
  const {
    restaurantName,
    restaurantImage,
    orderId,
    date,
    status,
    totalAmount,
    dishes,
  } = order;
  const [isAddingNotes, setIsAddingNote] = useState(false);

  function handleAddingNote() {
    setIsAddingNote((currentValue) => !currentValue);
  }

  const statusClass =
    status === "Ready For Delivery"
      ? "border-green-500 text-green-500"
      : "border-gray-400 text-gray-400";

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

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            color="primary"
            rounding="full"
            className={"py-3"}
            onClick={handleAddingNote}
          >
            Notes
          </Button>
          {status !== "Ready For Delivery" && (
            <Button
              color="white"
              rounding="full"
              className={"py-3"}
              onClick={() => onReadyForDelivery(orderId)}
            >
              Ready for delivery
            </Button>
          )}
        </div>
      </div>
      {isAddingNotes && <OrderNotesCard orderId={orderId} />}
    </div>
  );
};

ManageOrderCard.propTypes = {
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
  onReadyForDelivery: PropTypes.func.isRequired,
};

export default ManageOrderCard;
