import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SelectMenuSuggestionBox from "./SelectMenuSuggestionBox.jsx";

SelectMenu.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.node,
  choice: PropTypes.string,
  setChoice: PropTypes.func,
  onChoice: PropTypes.func,
};

function SelectMenu({
  items = [],
  className,
  children = "",
  choice,
  setChoice,
  onChoice,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const selectMenuRef = useRef(null); // Create a ref for the select menu

  const handleClickOutside = (event) => {
    // Check if the click was outside the select menu
    if (
      selectMenuRef.current &&
      !selectMenuRef.current.contains(event.target)
    ) {
      setTimeout(() => {
        setIsFocused(false);
      }, 500); // Close the suggestion box
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative flex flex-col ${className}`}>
      <div
        ref={selectMenuRef} // Attach the ref to the outer div
        className={
          "flex justify-center items-center gap-2 text-lg py-3 px-6 min-w-40 w-40 rounded-full relative border border-project-orange text-project-orange cursor-pointer"
        }
        onClick={() => {
          setIsFocused(true);
        }}
      >
        {<div className={"z-10"}>{children}</div>}
        <p
          className={
            "bg-transparent outline-none w-full z-10 block text-center text-nowrap overflow-hidden"
          }
        >
          {choice}
        </p>

        <IoIosArrowDown className={"z-10"} />
      </div>
      {isFocused && items.length > 0 && (
        <SelectMenuSuggestionBox
          items={items}
          setIsFocused={setIsFocused}
          setChoice={setChoice}
          onChoice={onChoice}
        />
      )}
    </div>
  );
}

export default SelectMenu;
