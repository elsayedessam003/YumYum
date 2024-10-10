import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";
import { TiArrowSortedDown } from "react-icons/ti";

Drawer.propTypes = {};

function Drawer({ className, children }) {
  const [isOpened, setIsOpened] = useState(false);

  function handleClick() {
    setIsOpened((currentState) => !currentState);
  }

  return (
    <div
      className={`${className} w-screen bg-white flex flex-col border-b items-center h-fit z-10 max-h-max transition-all ease-linear pb-2 sticky top-[97px]`}
    >
      <div
        className={`${isOpened ? "h-fit visible" : "h-0 invisible"} transition-all ease-linear overflow-y-hidden`}
      >
        {children}
      </div>

      <Button variant={"text"} onClick={handleClick}>
        <TiArrowSortedDown
          className={`text-4xl ${isOpened ? "rotate-180" : ""} transition-all ease-linear`}
        />
      </Button>
    </div>
  );
}

export default Drawer;
