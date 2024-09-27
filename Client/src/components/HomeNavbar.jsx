import PropTypes from "prop-types";
import Register from "./Register/Register.jsx";
import { useState } from "react";

HomeNavbar.propTypes = {
  setLogin: PropTypes.func.isRequired,
  setSignUp: PropTypes.func.isRequired,
};

function HomeNavbar({ setLogin, setSignUp }) {
  const [active, setActive] = useState(false);
  return (
    <div
      className={
        "h-[7rem] px-[7%] md:px-[5%] md:h-[8rem] w-screen pt-8 flex items-center justify-between relative overflow-hidden"
      }
    >
      <img
        src="/public/Logo-White.svg"
        alt="YamYam logo"
        className={"h-full"}
      />
      <button
        className={"md:hidden text-white text-4xl"}
        onClick={() => {
          setActive(!active);
        }}
      >
        test
      </button>
      <div
        className={`flex items-center gap-10 ${active ? "left-0" : ""} md:flex absolute md:relative left-96 md:left-0 transition-all bg-black w-full `}
      >
        <button
          className={"text-white text-2xl hover:text-project-orange transition"}
          onClick={() => {
            setLogin(true);
          }}
        >
          Login
        </button>
        <button
          className={
            "text-white text-2xl py-4 px-6 bg-project-orange rounded-full hover:bg-opacity-90 active:bg-opacity-80"
          }
          onClick={() => {
            setSignUp(true);
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default HomeNavbar;
