import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../../context/UserProvider.jsx";
import CartDish from "./CartDish.jsx";
import Button from "../Button/Button.jsx";
import { MdClose } from "react-icons/md";
import { FaPoundSign } from "react-icons/fa";
import axiosInstance from "../../config/axios.instance.js";

Cart.propTypes = {
  setIsOpened: PropTypes.func.isRequired,
  setAddressStatus: PropTypes.func.isRequired,
};

function Cart({ setIsOpened, setAddressStatus }) {
  const { cart, token, setCart } = useContext(UserContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [restaurantName, setRestaurantName] = useState("");
  const [delivery, setDelivery] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(cart);
    if (cart) {
      async function getRestaurant() {
        const restaurantId = cart.restaurantId;

        try {
          const { status, data } = await axiosInstance.get(
            `/restaurants/${restaurantId}`,
          );

          if (199 < status <= 299) {
            const restaurant = data.data.restaurant;
            setRestaurantName(restaurant.name);
            setDelivery(restaurant.deliveryFees);
          }
        } catch (e) {
          console.error(e);
        }
      }

      if (cart.restaurantId) getRestaurant();

      setItems(cart.items);
    } else {
      setRestaurantName("");
      setDelivery(0);
      setTotalPrice(0);
      setItems([]);
    }
  }, [cart]);

  function handleClick() {
    setIsOpened(false);
  }

  function handleCheckOut() {
    setAddressStatus(true);
  }

  async function handleClear() {
    if (cart) {
      try {
        const { status, data } = await axiosInstance.delete(
          `cart/${cart._id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        if (199 < status <= 299) {
          try {
            const { status, data } = await axiosInstance.get("cart", {
              headers: { Authorization: `Bearer ${token}` },
            });

            if (199 < status <= 299) {
              setCart(data.data);
            }
          } catch (e) {
            console.error(e);
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
  }

  return (
    <div
      className={"flex flex-col px-8 py-4 h-screen w-fit border"}
      style={{ boxShadow: "-9px 4px 12.6px 0px rgba(0, 0, 0, 0.09)" }}
    >
      <div
        className={"grid grid-rows-2 grid-cols-2 pb-2 border-b border-black/20"}
      >
        <p className={"col-span-1 text-black/70 font-semibold"}>
          Your cart from
        </p>
        <button
          className={"hover:text-project-orange justify-self-end"}
          onClick={handleClick}
        >
          <MdClose className={"text-3xl"} />
        </button>
        <p className={"text-xl font-semibold"}>{restaurantName}</p>
      </div>

      <div
        className={
          "border-b border-black/20 h-[387px] overflow-y-auto custom-scrollbar w-[341px]"
        }
      >
        {/*TODO: uncomment this when the cart is connected to the server*/}
        {items.map((item) => {
          return (
            <CartDish
              key={item.productId}
              id={item.productId}
              count={item.quantity}
              setPrice={setTotalPrice}
            />
          );
        })}
      </div>

      <div className={"py-4"}>
        <div className={"py-4 border-b"}>
          <div className={"flex items-center justify-between text-l"}>
            <p className={"text-black/70 font-medium"}>Subtotal</p>
            <p className={"flex items-center text-black/70 font-semibold"}>
              <FaPoundSign className={"text-sm"} />
              {cart.total}
            </p>
          </div>

          <div className={"flex items-center justify-between text-l"}>
            <p className={"text-black/70 font-medium"}>Delivery fee</p>
            <p className={"flex items-center text-black/70 font-semibold"}>
              <FaPoundSign className={"text-sm"} />
              {delivery}
            </p>
          </div>
        </div>

        <div className={"flex items-center justify-between text-l pt-6"}>
          <p className={"text-black font-medium"}>TOTAL ORDER</p>
          <p className={"flex items-center text-black font-semibold"}>
            <FaPoundSign className={"text-sm"} />
            {delivery + cart.total}
          </p>
        </div>
      </div>

      <div className={"w-full flex flex-col gap-2 py-8"}>
        <Button
          color={"white"}
          rounding={"rounded"}
          className={"w-full py-4 rounded-xl font-medium"}
          onClick={handleCheckOut}
        >
          Checkout
        </Button>

        <Button
          variant={"outline"}
          rounding={"rounded"}
          className={
            "w-full py-4 font-medium rounded-xl text-project-red border-project-red hover:bg-project-red/5 hover:bg-project-red"
          }
          onClick={handleClear}
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
