import PropTypes from "prop-types";
import DishCard from "./DishCard";
import Button from "../Button/Button.jsx";
import { MdOutlineStarBorder } from "react-icons/md";
import OrderStatus from "./OrderStatus.jsx";
import { useContext, useEffect, useState } from "react";
import axiosInstance from "../../config/axios.instance.js";
import { UserContext } from "../../context/UserProvider.jsx";
import { toast } from "react-hot-toast";

function ViewOrderCard({ order }) {
  const { createdAt, items, restaurantId, status, total, _id } = order;
  const [restaurant, setRestaurant] = useState(null);
  const date = new Date(createdAt);
  const [dishes, setDishes] = useState([]);
  const { token, setCart } = useContext(UserContext);

  useEffect(() => {
    async function getRestaurant() {
      const { status, data } = await axiosInstance.get(
        `restaurants/${restaurantId}`,
      );

      if (199 < status <= 299) {
        setRestaurant(data.data.restaurant);
      }
    }

    async function getDishes() {
      const dishesTemp = [];
      try {
        for (const item of items) {
          const dish = {};
          const { status, data } = await axiosInstance.get(
            `dishes/${item.productId}`,
          );

          if (199 < status <= 299) {
            const temp = data.data.dish;
            dish["image"] = temp.imageUrl;
            dish["name"] = temp.name;
            dish["description"] = temp.description;
            dish["quantity"] = item.quantity;
            dish["price"] = temp.price;
            dish["id"] = temp._id;
            dishesTemp.push(dish);
          }
        }
        setDishes(dishesTemp);
      } catch (e) {
        console.error(e);
      }
    }

    getDishes();
    getRestaurant();
  }, []);

  async function handleOrder() {
    for (const item of items) {
      const sendingData = {
        productId: item.productId,
        restaurantId: restaurantId,
        quantity: item.quantity,
      };

      const { status, data } = await axiosInstance.post("cart", sendingData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (199 < status <= 299) {
      }
    }

    try {
      const { status, data } = await axiosInstance.get("cart", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (199 < status <= 299) {
        setCart(data.data);
      }
    } catch (e) {
      console.error(e.message);
    }

    toast.success("Order added!");
  }

  return (
    <>
      {restaurant ? (
        <div className="rounded-lg">
          <div className="flex items-center justify-between">
            <div className="h-28 flex gap-4 items-center">
              <img
                src={restaurant.profileImgUrl}
                alt={`${restaurant.name}'s profile image`}
                className="w-20 aspect-square rounded-full object-cover"
              />
              <div className="h-20 flex flex-col justify-around">
                <h2 className="text-2xl font-bold">{restaurant.name}</h2>
                <p className="text-lg text-black/60">
                  Order ID: #{_id} • {date.toDateString()}
                </p>
              </div>
            </div>

            <OrderStatus status={status} />
          </div>

          <div>
            {dishes.map((dish, index) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>

          <div className="flex justify-between items-center pt-6">
            <div className={"flex gap-8"}>
              <p className="font-medium text-lg text-black/65">TOTAL </p>
              <p className={"font-bold text-xl"}>£{total}</p>
            </div>

            <Button
              color={"white"}
              rounding={"full"}
              className={"py-3"}
              onClick={handleOrder}
            >
              Order Again
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ViewOrderCard;
