import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Button from "../Button/Button.jsx";

Slider.propTypes = {
  choice: PropTypes.any.isRequired,
  setChoice: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

function Slider({ choice, setChoice, className, children }) {
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(
      React.Children.map(children, (child) => {
        return child.props.value;
      }),
    );
  }, [children]);

  function handleClick(value) {
    const index = values.indexOf(choice);
    if (index + value >= 0 && index + value < values.length) {
      setChoice(values[index + value]);
    }
  }

  return (
    <div
      className={`flex w-full items-center gap-4 lg:gap-20 ${className} overflow-hidden`}
    >
      <Button
        rounding={"circle"}
        size={"small"}
        onClick={() => {
          handleClick(-1);
        }}
      >
        <FaAngleLeft className={"text-white text-sm lg:text-3xl"} />
      </Button>

      <div
        className={
          "flex justify-start items-center gap-4 lg:gap-12 select-none w-full overflow-hidden lg:px-4"
        }
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { choice, setChoice });
        })}
      </div>

      <Button
        rounding={"circle"}
        size={"small"}
        onClick={() => {
          handleClick(1);
        }}
      >
        <FaAngleRight className={"text-white text-lg lg:text-3xl"} />
      </Button>
    </div>
  );
}

export default Slider;
