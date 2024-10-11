import React from "react";
import PropTypes from "prop-types";
import { FaPoundSign } from "react-icons/fa";
import { HiTrash } from "react-icons/hi2";

CartDish.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

function CartDish({ name, count, price, image }) {
  return (
    <div className={"flex gap-8 items-center border-b py-6"}>
      <div className={"flex gap-4"}>
        <img
          src={image}
          alt={`${name}'s image`}
          className={"aspect-square w-20 rounded-xl"}
        />

        <div>
          <p className={"font-medium"}>{name}</p>
          <p className={"font-medium"}>x{count}</p>
          <div className={"flex items-center text-black/70"}>
            <FaPoundSign className={"text-sm"} />
            <p className={"font-bold"}>{price * count}</p>
          </div>
        </div>
      </div>

      <div
        className={
          "flex justify-center items-center w-12 h-12 bg-black bg-opacity-[0.06] rounded-full"
        }
      >
        <HiTrash className={"text-2xl text-project-red"} />
      </div>
    </div>
  );
}

export default CartDish;
