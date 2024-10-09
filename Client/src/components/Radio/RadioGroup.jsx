import React, { useState } from "react";
import PropTypes from "prop-types";

RadioGroup.propTypes = {
  choice: PropTypes.string.isRequired,
  setChoice: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

function RadioGroup({ choice, setChoice, className, children }) {
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { choice, setChoice });
      })}
    </div>
  );
}

export default RadioGroup;
