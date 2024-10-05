import PropTypes from "prop-types";
import { CgSearch } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa6";
import SuggestionBox from "./SuggestionBox/SuggestionBox.jsx";
import { useState } from "react";

HomeSearchBar.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  items: PropTypes.array,
};

function HomeSearchBar({ placeHolder, items = [] }) {
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className={" w-[85%] max-w-[37rem] relative flex flex-col"}>
      <div
        className={`flex items-center border-t-2 border-x-2 border-transparent bg-white bg-opacity-[0.19] py-6 px-10 backdrop-blur-[1px] focus-within:border-project-orange ${isFocused ? "rounded-t-3xl" : "rounded-3xl"} z-10`}
      >
        <CgSearch className={"text-white text-4xl"} />
        <input
          type="text"
          name="restaurant"
          placeholder={placeHolder}
          className={
            "h-full w-full text-2xl px-6 bg-transparent border-0 focus:outline-none text-white text-opacity-[0.69]"
          }
          autoComplete={"off"}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <FaArrowRight className={"text-project-orange text-3xl"} />
      </div>

      {isFocused && (
        <SuggestionBox items={items} search={search} setSearch={setSearch} />
      )}
    </div>
  );
}

export default HomeSearchBar;
