import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

FloatingButton.propTypes = {};

function FloatingButton({ placeHolder, children }) {
  const [active, setActive] = useState(false);
  const container = useRef(null);

  function handleClick(e) {
    if (!active) {
      setActive((currentState) => !currentState);
    } else if (active && e.target === container.current) {
      setActive((currentState) => !currentState);
    }
  }

  return (
    <div
      className={`fixed bg-white px-6 aspect-square flex lg:hidden items-center justify-center z-10 ${active ? "rounded-none w-full top-0 left-0 h-full" : "top-[90%] left-[80%] rounded-full"} transition-all ease-linear border`}
      onClick={handleClick}
      ref={container}
    >
      {!active ? placeHolder : children}
    </div>
  );
}

export default FloatingButton;
