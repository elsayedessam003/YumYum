import { createContext, useState } from "react";
import PropTypes from "prop-types";

FilterProvider.propTypes = {
  children: PropTypes.node,
};

export const FilterContext = createContext();

function FilterProvider({ children }) {
  const [isOpened, setIsOpened] = useState(false);
  const [choice, setChoice] = useState("");

  return (
    <FilterContext.Provider
      value={{ isOpened, setIsOpened, choice, setChoice }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
