import React, { useState } from "react";
import PropTypes from "prop-types";

TextArea.propTypes = {
  placeHolder: PropTypes.string,
  isRequired: PropTypes.bool,
  value: PropTypes.string,
  setValue: PropTypes.func,
  className: PropTypes.string,
};

function TextArea({
  placeHolder,
  isRequired = false,
  value,
  setValue,
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
      <textarea
        className={`w-full outline-0 text-lg p-3 rounded-lg border ${focused ? "border-project-orange" : ""} resize-none h-[10rem]`}
        required={isRequired}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <div
        className={`absolute left-2.5 pointer-events-none bg-white px-1 ${focused || value ? "-top-0 -translate-y-1/2 text-sm" : "top-4 text-lg"} ${focused ? "text-project-orange" : "text-black/40"} transition-all ease-linear flex items-center`}
      >
        {placeHolder}
      </div>
    </div>
  );
}

export default TextArea;
