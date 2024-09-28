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
          onClick={() => {
            setLogin(true);
            setActive(false);
          }}
        >
          Login
        </button>
        <button
          className="text-white text-2xl py-4 px-6 bg-project-orange rounded-full hover:bg-opacity-90 active:bg-opacity-80 transition"
          onClick={() => {
            setSignUp(true);
            setActive(false);
          }}
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
        className={`absolute bg-black bg-opacity-60 backdrop-blur-lg p-8 flex flex-col gap-4 top-full left-full -translate-x-full ml-[-7%] z-10 w-[60%] ${active ? "scale-100" : "scale-0"} transition-all md:hidden`}
      >
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
