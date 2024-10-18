import PropTypes from "prop-types";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import SuggestionBox from "./SuggestionBox.jsx";

SearchBar.propTypes = {
  placeHolder: PropTypes.string,
  search: PropTypes.string,
  setSearch: PropTypes.func,
  items: PropTypes.array,
  onChoice: PropTypes.func,
};

function SearchBar({
  placeHolder = "",
  search = "",
  setSearch,
  items,
  onChoice,
}) {
  const [isFocused, setIsFocused] = useState();

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div
      className={
        "flex justify-center items-center gap-2 text-lg bg-project-offWhite py-3 px-6 w-full rounded-full relative"
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
          setTimeout(() => {
            setIsFocused(false);
          }, 100);
        }}
        onChange={handleChange}
      />

      {isFocused && search && items.length ? (
        <SuggestionBox items={items} onChoice={onChoice} />
      ) : (
        ""
      )}
    </div>
  );
}

export default SearchBar;
