import PropTypes from "prop-types";
import style from "./SuggestionBox.module.css";
import { useEffect, useState } from "react";

SuggestionBox.propTypes = {
  items: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

function SuggestionBox({ items, search, setSearch }) {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    let temp = items.sort();

    temp = temp.filter((item) => {
      return item.toLowerCase().includes(search);
    });

    setFilteredItems(temp);
  }, [search]);

  function handleClick(e) {
    setSearch(e.target.textContent);
  }
  return (
    <div
      className={`absolute w-full self-center bg-black translate-y-[6rem] rounded-l-3xl p-2 flex flex-col max-h-[15rem] overflow-auto ${style.temp}`}
    >
      {getItems(filteredItems, handleClick)}
    </div>
  );
}

function getItems(items, handleClick) {
  return items.map((item, index) => {
    return (
      <p
        key={index}
        className={
          "text-white text-2xl px-10 cursor-pointer hover:bg-white hover:text-black py-4 rounded-3xl"
        }
        onMouseDown={handleClick}
      >
        {item}
      </p>
    );
  });
}

export default SuggestionBox;
