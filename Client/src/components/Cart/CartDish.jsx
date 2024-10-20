import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaPoundSign } from "react-icons/fa";
import { HiTrash } from "react-icons/hi2";
import axiosInstance from "../../config/axios.instance.js";
import { UserContext } from "../../context/UserProvider.jsx";
import { toast } from "react-hot-toast";

CartDish.propTypes = {
  id: PropTypes.string,
  count: PropTypes.number,
  setPrice: PropTypes.func,
};

function CartDish({ id, count, setPrice }) {
  const [dish, setDish] = useState(null);
  const { token, cart, setCart } = useContext(UserContext);

  useEffect(() => {
    async function getDish() {
      try {
        const { status, data } = await axiosInstance.get(`dishes/${id}`);

        if (199 < status <= 299) {
          const dish = data.data.dish;
          setDish(dish);
          const totalPrice = dish.price * count;
          setPrice((currentPrice) => {
            return currentPrice + totalPrice;
          });
        }
      } catch (e) {
        console.error(e.message);
      }
    }

    getDish();
  }, []);

  async function handleDelete() {
    try {
      const { status, data } = await axiosInstance.delete(`cart/${cart._id}`, {
        data: { productId: id },
        headers: { Authorization: `Bearer ${token}` },
      });

      if (199 < status <= 299) {
        toast.success("item deleted!");

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
      toast.error(e.message);
    }
  }

  return (
    <>
      {dish && (
        <div
          className={"grid gap-10 grid-cols-2 items-center border-b py-6 pr-4"}
        >
          <div className={"flex gap-4"}>
            <img
              src={dish.imageUrl}
              alt={`${dish.name}'s image`}
              className={"aspect-square w-20 rounded-xl object-cover"}
            />

            <div className={"w-full"}>
              <p className={"font-medium truncate"}>{dish.name}</p>
              <p className={"font-medium"}>x{count}</p>
              <div className={"flex items-center text-black/70"}>
                <FaPoundSign className={"text-sm"} />
                <p className={"font-bold"}>{dish.price * count}</p>
              </div>
            </div>
          </div>

          <div
            className={
              "flex justify-center items-center w-12 h-12 bg-black bg-opacity-[0.06] rounded-full justify-self-end"
            }
            onClick={handleDelete}
          >
            <HiTrash className={"text-2xl text-project-red"} />
          </div>
        </div>
      )}
    </>
  );
}

export default CartDish;
