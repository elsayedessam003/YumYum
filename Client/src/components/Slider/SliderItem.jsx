import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

SliderItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  value: PropTypes.string.isRequired,
  choice: PropTypes.string,
  setChoice: PropTypes.func,
};

function SliderItem({ label, icon, value, choice, setChoice }) {
  const itemRef = useRef(null);
  function handleClick() {
    setChoice(value);
  }

  useEffect(() => {
    if (value === choice) {
      itemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center", // For horizontal scrolling
      });
    }
  }, [choice]);

  return (
    <div
      className={
        "flex flex-col justify-center w-fit h-auto text-center gap-4 cursor-pointer flex-shrink-0"
      }
      onClick={handleClick}
      onChange={handleClick}
      ref={itemRef}
    >
      {icon ? (
        <div
          className={`bg-project-offWhite w-full h-fit p-6 rounded-full ${value === choice ? "border-[6px] border-project-orange" : "hover:scale-105"} transition-all ease-linear`}
        >
          <img src={icon} alt="value" className={"w-[72px] aspect-square"} />
        </div>
      ) : null}

      <p
        className={`text-xl ${value === choice ? "underline underline-offset-4 lg:no-underline text-project-orange" : "text-black/40 lg:text-white"}`}
      >
        {label}
      </p>
    </div>
  );
}

export default SliderItem;
