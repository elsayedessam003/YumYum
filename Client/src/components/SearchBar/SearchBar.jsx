import PropTypes from "prop-types";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import SuggestionBox from "./SuggestionBox.jsx";

SearchBar.propTypes = {
  placeHolder: PropTypes.string,
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

function SearchBar({ placeHolder = "", search = "", setSearch }) {
  const [isFocused, setIsFocused] = useState();

  return (
    <div
      className={
        "flex justify-center items-center gap-2 text-lg bg-project-offWhite py-3 px-6 max-w-[60rem] w-full rounded-full relative"
      }
    >
      <IoIosSearch className={"text-2xl text-black text-opacity-[22%] z-10"} />
      <input
        type="text"
        autoComplete={"off"}
        placeholder={placeHolder}
        className={
          "bg-transparent outline-none placeholder-black placeholder-opacity-[22%] w-full z-10"
        }
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />

      {isFocused && (
        <SuggestionBox
          items={[
            "potato",
            "potato",
            "potato",
            "potato",
            "potato",
            "potato",
            "potato",
            "potato",
            "potato",
          ]}
        />
      )}
    </div>
  );
}

export default SearchBar;
