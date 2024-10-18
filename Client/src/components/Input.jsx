import React, { useState } from "react";
import PropTypes from "prop-types";

Input.propTypes = {
  placeHolder: PropTypes.string,
  isRequired: PropTypes.bool,
  value: PropTypes.string,
  setValue: PropTypes.func,
  type: PropTypes.oneOf(["text", "number"]),
  icon: PropTypes.any,
  className: PropTypes.string,
};

function Input({
  placeHolder,
  isRequired = false,
  value,
  setValue,
  type = "text",
  icon,
  className,
  ...rest
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      {...rest}
      className={` w-fit relative ${className}`}
      onFocus={() => {
        setFocused(true);
      }}
      onBlur={() => {
        setFocused(false);
      }}
    >
      <input
        type={type}
        className={`w-full outline-0 text-lg p-3 rounded-lg border ${focused ? "border-project-orange" : ""}`}
        required={isRequired}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        onWheel={(e) => e.target.blur()}
      />

      <div
        className={`absolute left-2.5 pointer-events-none bg-white px-1 ${focused || value ? "-top-0 -translate-y-1/2 text-sm" : "top-1/2 -translate-y-1/2 text-lg"} ${focused ? "text-project-orange" : "text-black/40"} transition-all ease-linear flex items-center`}
      >
        {placeHolder}
      </div>

      {icon && (
        <div
          className={`absolute top-1/2 -translate-y-1/2 right-4 text-3xl ${value && focused ? "text-project-orange" : "text-black/40"}`}
        >
          {icon}
        </div>
      )}
    </div>
  );
}

export default Input;
