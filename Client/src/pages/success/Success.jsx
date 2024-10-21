import React, { useContext, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../config/axios.instance.js";
import { UserContext } from "../../context/UserProvider.jsx";

function Success() {
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { cart, setCart, token } = useContext(UserContext);

  useEffect(() => {
    if (cart && cart.items.length && !orderPlaced) {
      setOrderPlaced(true);
      async function addOrder() {
        console.log(cart);
        try {
          const { status, data } = await axiosInstance.post(
            "orders",
            {
              items: cart.items,
              total: cart.total,
              restaurantId: cart.restaurantId,
            },
            { headers: { Authorization: `Bearer ${token}` } },
          );

          if (199 < status <= 299) {
            delCart();
          }
        } catch (e) {
          console.error(e);
        }
      }

      addOrder();

      async function delCart() {
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
                setTimeout(() => {
                  navigate("/");
                }, 2000);
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
  }, [cart]);

  return (
    <div
      className={"w-full h-screen flex justify-center items-center bg-black/40"}
    >
      <div
        className={
          "bg-white p-16 flex flex-col gap-4 justify-center items-center rounded-xl"
        }
      >
        <div
          className={
            "bg-project-offWhite p-8 aspect-square rounded-full flex items-center justify-center"
          }
        >
          <FaCheck className={"text-[4rem] text-green-700"} />
        </div>
        <p className={"font-bold text-3xl text-green-700"}>Success</p>
        <div className={"text-center"}>
          <p>Thank you for using our service!</p>
          <p>Redirecting...</p>
        </div>
      </div>
    </div>
  );
}

export default Success;
