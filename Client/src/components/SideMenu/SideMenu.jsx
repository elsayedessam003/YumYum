import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import SideMenuButton from "./SideMenuButton.jsx";

SideMenu.propTypes = {
  color: PropTypes.oneOf(["primary", "white", "black"]),
  className: PropTypes.string,
  children: PropTypes.node,
};

function SideMenu({ color = "primary", className, children }) {
  const [isOpened, setIsOpened] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      e.target !== target.current && isOpened ? setIsOpened(false) : null;
    }

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [isOpened, target]);

  return (
    <div className={`block lg:hidden ${className}`}>
      <SideMenuButton
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        color={getColor(color)}
        className={"z-50 relative"}
        onMouseDown={(e) => e.stopPropagation()}
      />
      <div
        className={`absolute bg-black flex flex-col left-0 top-0 w-full h-screen z-40 gap-4 px-12 pt-24 rounded transition-all ease-linear bg-opacity-50 backdrop-blur-lg ${isOpened ? "left-0" : "invisible w-0 opacity-0"}`}
        ref={target}
      >
        {children}
      </div>
    </div>
  );
}

function getColor(color) {
  switch (color) {
    case "white":
      return "white";
    case "black":
      return "black";
    case "primary":
      return "primary";
  }
}

export default SideMenu;
