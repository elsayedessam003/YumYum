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
    <div className={`block lg:hidden ${className} relative`}>
      <SideMenuButton
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        color={getColor(color)}
        className={"z-10 relative"}
        onMouseDown={(e) => e.stopPropagation()}
      />
      <div
        className={`absolute bg-black flex flex-col gap-4 p-12 rounded top-0 right-0 translate-x-4 -translate-y-4 transition-all ease-linear bg-opacity-50 backdrop-blur-lg ${isOpened ? "" : "invisible opacity-0 h-0"}`}
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
      return "bg-white";
    case "black":
      return "bg-black";
    case "primary":
      return "bg-project-orange";
  }
}

export default SideMenu;
