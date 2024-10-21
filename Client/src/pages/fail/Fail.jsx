import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { UserContext } from "../../context/UserProvider.jsx";
import axiosInstance from "../../config/axios.instance.js";

function Fail() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

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
          <RxCross1 className={"text-[4rem] text-project-red"} />
        </div>
        <p className={"font-bold text-3xl text-project-red"}>Failed</p>
        <div className={"text-center"}>
          <p>Please try again using a different credit card!</p>
          <p>Redirecting...</p>
        </div>
      </div>
    </div>
  );
}

export default Fail;
