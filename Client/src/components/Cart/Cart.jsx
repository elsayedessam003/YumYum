import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../../context/UserProvider.jsx";
import CartDish from "./CartDish.jsx";
import Button from "../Button/Button.jsx";
import { MdClose } from "react-icons/md";
import { FaPoundSign } from "react-icons/fa";

Cart.propTypes = {
  setIsOpened: PropTypes.func.isRequired,
};

function Cart({ setIsOpened }) {
  const cart = useContext(UserContext).user.cart.dishes;
  const restaurantName = cart[0].restaurant;
  const totalPrice = cart.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price;
  }, 0);
  const delivery = 20;

  function handleClick() {
    setIsOpened(false);
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
          "border-b border-black/20 h-[387px] overflow-y-scroll custom-scrollbar"
        }
      >
        {cart.map((dish) => {
          return (
            <CartDish
              name={dish.name}
              count={dish.count}
              price={dish.price}
              image={dish.image}
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
              {totalPrice}
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
            {delivery + totalPrice}
          </p>
        </div>
      </div>

      <div className={"w-full flex flex-col gap-2 py-8"}>
        <Button
          color={"white"}
          rounding={"rounded"}
          className={"w-full py-4 rounded-xl font-medium"}
        >
          Checkout
        </Button>

        <Button
          variant={"outline"}
          rounding={"rounded"}
          className={
            "w-full py-4 font-medium rounded-xl text-project-red border-project-red hover:bg-project-red/5 hover:bg-project-red"
          }
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
