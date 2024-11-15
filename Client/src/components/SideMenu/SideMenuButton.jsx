import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";

SideMenuButton.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  setIsOpened: PropTypes.func.isRequired,
  color: PropTypes.oneOf(["primary", "white", "black"]),
  className: PropTypes.node,
  onMouseDown: PropTypes.func,
};

function SideMenuButton({
  isOpened,
  setIsOpened,
  color,
  className,
  onMouseDown,
}) {
  const duration = "100";

  function handleClick() {
    setIsOpened((currentState) => !currentState);
  }

  return (
    <Button
      variant={"text"}
      color={"white"}
      rounding={"full"}
      size={"fit"}
      onClick={handleClick}
      className={className}
      onMouseDown={onMouseDown}
    >
      <div className={"flex flex-col shrink-0 gap-2 w-8 relative h-5"}>
        <div
          className={`w-full ${color} h-1 rounded-full absolute transition-all ease-linear duration-[${duration}ms] ${isOpened ? "top-1/2 rotate-[45deg]" : "top-0"}`}
        ></div>
        <div
          className={` ${color} h-1 rounded-full transition-all ease-linear absolute top-1/2 duration-[${duration}ms] ${isOpened ? "w-0" : "w-full"}`}
        ></div>
        <div
          className={`w-full ${color} h-1 rounded-full absolute transition-all ease-linear duration-[${duration}ms] ${isOpened ? "top-1/2 -rotate-[45deg]" : "top-full"}`}
        ></div>
      </div>
    </Button>
  );
}

export default SideMenuButton;
