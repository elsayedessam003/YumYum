import PropTypes from "prop-types";
import { useState } from "react";

HomeNavbar.propTypes = {
  setLogin: PropTypes.func.isRequired,
  setSignUp: PropTypes.func.isRequired,
};

function HomeNavbar({ setLogin, setSignUp }) {
  const [active, setActive] = useState(false);

  return (
    <div className="h-[7rem] px-[7%] md:px-[5%] md:h-[8rem] w-screen pt-8 flex items-center justify-between relative">
      <img src="/public/Logo-White.svg" alt="YamYam logo" className="h-full" />

      <div className="hidden md:flex items-center gap-10">
        <button
          className="text-white text-2xl hover:text-project-orange transition"
          onClick={() => setLogin(true)}
        >
          Login
        </button>
        <button
          className="text-white text-2xl py-4 px-6 bg-project-orange rounded-full hover:bg-opacity-90 active:bg-opacity-80 transition"
          onClick={() => setSignUp(true)}
        >
          Register
        </button>
      </div>

      <button
        className="md:hidden text-white text-4xl"
        onClick={() => setActive(!active)}
      >
        {active ? "✕" : "☰"}
      </button>

      <div
        className={`flex flex-col items-center gap-8 transition-all ease-in-out duration-300 ${
          active ? "right-0 opacity-100" : "right-[-100%] opacity-0"
        } md:hidden fixed top-0 right-0 w-[65%] h-[60%] bg-black
    bg-opacity-60 backdrop-blur-lg z-20 transition-all p-10 rounded-l-md`}
      >
        <button
          className="self-end text-white text-2xl mb-6"
          onClick={() => setActive(false)}
        >
          ✕
        </button>

        <button
          className="text-white text-2xl hover:text-project-orange transition w-full text-center py-4 bg-gray-800 rounded-md"
          onClick={() => {
            setLogin(true);
            setActive(false);
          }}
        >
          Login
        </button>

        <button
          className="text-white text-2xl py-4 px-6 bg-project-orange rounded-md hover:bg-opacity-90 active:bg-opacity-80 transition w-full text-center"
          onClick={() => {
            setSignUp(true);
            setActive(false);
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default HomeNavbar;
