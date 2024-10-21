import PropTypes from "prop-types";
import DishCard from "../My Orders/DishCard.jsx";
import Button from "../Button/Button.jsx";
import { useState } from "react";
import OrderNotesCard from "./OrderNotesCard.jsx";

const ManageOrderCard = ({ order, onReadyForDelivery }) => {
  const { restaurantName, restaurantImage, orderId, date, status, totalAmount, dishes } = order;
  const [isAddingNotes, setIsAddingNote] = useState(false);

  function handleAddingNote() {
    setIsAddingNote((currentValue) => !currentValue);
  }

  const statusClass = status === "Ready For Delivery"
    ? "border-green-500 text-green-500"
    : "border-gray-400 text-gray-400";

  return (
    <div className="rounded-lg">
      <div className="flex items-center justify-between">
        <div className="h-28 flex gap-2 items-center">
          <img
            src={restaurantImage}
            alt={restaurantName}
            className="w-24 aspect-square rounded-full"
          />
          <div className="h-20 flex flex-col justify-around">
            <h2 className="text-2xl font-bold">{restaurantName}</h2>
            <p className="text-lg text-gray-500">
              Order ID: #{orderId} • {date}
            </p>
          </div>
        </div>
        <p
          className={`h-14 w-48 flex justify-center items-center border bg-white py-2 gap-2 rounded-full
            ${statusClass}`}
        >
          {status}
        </p>
      </div>

      <div>
        {dishes.map((dish, index) => (
          <DishCard key={index} dish={dish} />
        ))}
      </div>

      <div className="flex justify-between items-center pt-6">
        <p className="font-bold text-xl">TOTAL £{totalAmount}</p>
        <div className="flex items-center gap-4">
          <Button variant="outline" color="primary" rounding="full" onClick={handleAddingNote}>
            Notes
          </Button>
          {status !== "Ready For Delivery" && (
            <Button color="white" rounding="full" onClick={() => onReadyForDelivery(orderId)}>
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
      })
    ).isRequired,
  }).isRequired,
  onReadyForDelivery: PropTypes.func.isRequired,
};

export default ManageOrderCard;
