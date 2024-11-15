import PropTypes from "prop-types";
import style from "./Button.module.css";

Button.propTypes = {
  variant: PropTypes.oneOf(["default", "outline", "text"]),
  color: PropTypes.oneOf(["primary", "white", "black"]),
  rounding: PropTypes.oneOf(["none", "rounded", "full", "circle"]),
  size: PropTypes.oneOf(["small", "medium", "large", "fit"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  ref: PropTypes.any,
  onMouseDown: PropTypes.func,
  children: PropTypes.node.isRequired,
};

function Button({
  variant = "default",
  color = "primary",
  rounding = "none",
  size = "medium",
  className,
  onClick,
  onMouseDown,
  children,
  ...rest
}) {
  return (
    <button
      className={`${style.button} h-fit flex justify-center items-center gap-2 ${getBackground(variant)} ${getColor(color)} ${getRounding(rounding)} ${getSize(size)} ${className}`}
      onClick={onClick}
      onMouseDown={onMouseDown}
      type={"button"}
      {...rest}
    >
      {children}
    </button>
  );
}

function getBackground(variant) {
  switch (variant) {
    case "default":
      return "bg-project-orange/100 hover:bg-project-orange/90";
    case "outline":
      return "bg-transparent border border-project-orange/50 hover:bg-project-orange/10 hover:border-project-orange/100";
    case "text":
      return "hover:text-project-orange";
  }
}

function getColor(color) {
  switch (color) {
    case "primary":
      return "text-project-orange";
    case "white":
      return "text-white";
    case "black":
      return "text-black";
  }
}

function getRounding(rounding) {
  switch (rounding) {
    case "none":
      return "";
    case "rounded":
      return "rounded";
    case "full":
      return "rounded-full";
    case "circle":
      return "rounded-full aspect-square";
  }
}

function getSize(size) {
  switch (size) {
    case "small":
      return "py-1 px-1 text-sm"; // Small padding and font size
    case "medium":
      return "py-2 px-6 text-lg"; // Default medium size
    case "large":
      return "py-3 px-8 text-xl"; // Larger padding and font size
    case "fit":
      return "text-lg";
  }
}

export default Button;
