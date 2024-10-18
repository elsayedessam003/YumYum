import React from "react";
import PropTypes from "prop-types";

InputSection.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(["default", "start"]),
  className: PropTypes.string,
  children: PropTypes.node,
};

function InputSection({ text, type = "default", className, children }) {
  return (
    <div
      className={`grid grid-cols-8 ${type === "default" ? "items-center" : ""} gap-8`}
    >
      <p className={"text-xl font-medium"}>{text}</p>
      <div className={`col-span-7 ${className}`}>{children}</div>
    </div>
  );
}

export default InputSection;
