import { createContext, useState } from "react";
import PropTypes from "prop-types";

FilterProvider.propTypes = {
  children: PropTypes.node,
};

export const FilterContext = createContext();

function FilterProvider({ children }) {
const [isOpened,setIsopened]=useState(false);
const [choice,setChoice]=useState("");


  return (
    <FilterContext.Provider value={{ isOpened,setIsopened,choice,setChoice }}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
