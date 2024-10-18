import React from "react";
import PropTypes from "prop-types";

SelectMenu.propTypes = {
  isOpened: PropTypes.bool,
  setIsOpened: PropTypes.func,
  setValue: PropTypes.func,
  chosenValue: PropTypes.string,
  setChosenValue: PropTypes.func,
  items: PropTypes.array,
};

function SelectMenu({
  isOpened,
  setIsOpened,
  setValue,
  chosenValue,
  setChosenValue,
  items,
}) {
  function getItem(name, value) {
    return (
      <p
        className={`w-full outline-0 text-lg p-3 hover:bg-project-orange cursor-pointer ${chosenValue === name ? "text-project-orange" : null} hover:text-white`}
        onClick={() => {
          setValue(value);
          setChosenValue(name);
          setIsOpened(false);
        }}
        key={value}
      >
        {name}
      </p>
    );
  }

  return (
    <div
      className={`absolute w-full bg-white border rounded-b-lg translate-y-2 ${isOpened ? "h-36" : "h-0 border-0"} overflow-y-scroll custom-scrollbar transition-all ease-linear z-10`}
    >
      {items.map((item) => getItem(item.name, item.value))}
    </div>
  );
}

export default SelectMenu;
