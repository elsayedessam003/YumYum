import PropTypes from "prop-types";
import style from "./Button.module.css";

Button.propTypes = {
  variant: PropTypes.oneOf(["default", "outline", "text"]),
  color: PropTypes.oneOf(["primary", "white", "black"]),
  rounding: PropTypes.oneOf(["none", "rounded", "full", "circle"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

function Button({
  variant = "default",
  color = "primary",
  rounding = "none",
  size = "medium",
  className,
  onClick,
  children,
}) {
  // variant -> default, outline, text
  // color -> primary, white, black

  return (
    <button
      className={`${style.button} h-fit flex justify-center items-center gap-2 ${getBackground(variant)} ${getColor(color)} ${getRounding(rounding)} ${className} ${getSize(size)}`}
      onClick={onClick}
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
      return "py-1 px-4 text-sm"; // Small padding and font size
    case "medium":
      return "py-2 px-6 text-lg"; // Default medium size
    case "large":
      return "py-3 px-8 text-xl"; // Larger padding and font size
  }
}

export default Button;
