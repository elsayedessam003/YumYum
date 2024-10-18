import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaAngleDown } from "react-icons/fa";
import SelectMenu from "./SelectMenu.jsx";
import hours from "../Hours.jsx";

Select.propTypes = {
  setValue: PropTypes.func,
  items: PropTypes.array,
  placeHolder: PropTypes.string,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
};

function Select({ setValue, items, placeHolder, isRequired, className }) {
  const [chosenValue, setChosenValue] = useState("");
  const [isOpened, setIsOpened] = useState(false);

  function handleOpening() {
    setIsOpened((currentValue) => !currentValue);
  }

  return (
    <div className={`w-full relative ${className}`}>
      <p
        className={`w-full outline-0 text-lg p-3 rounded-lg border ${isOpened ? "border-project-orange" : ""} flex items-center justify-between cursor-pointer`}
        onClick={handleOpening}
      >
        {chosenValue ? chosenValue : "\u00A0"}
        <FaAngleDown
          className={`text-black/40 ${isOpened ? "-rotate-180 text-project-orange" : ""} transition-all ease-linear`}
        />
      </p>

      <div
        className={`absolute left-2.5 pointer-events-none bg-white px-1 ${chosenValue ? "hidden" : "top-4 text-lg"} text-black/40 transition-all ease-linear flex items-center`}
      >
        {placeHolder}
      </div>

      <SelectMenu
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        items={items}
        setValue={setValue}
        chosenValue={chosenValue}
        setChosenValue={setChosenValue}
      />
    </div>
  );
}

export default Select;
