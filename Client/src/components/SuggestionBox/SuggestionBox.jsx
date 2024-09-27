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
      return item.toLowerCase().includes(search.toLowerCase());
    });

    temp = temp.sort((item) => {
      if (item.startsWith(search)) {
        return 1;
      } else return -1;
    });

    setFilteredItems(temp);
  }, [search]);

  function handleClick(e) {
    setSearch(e.target.textContent);
  }
  return (
    <>
      {filteredItems.length > 0 && (
        <div
          className={`absolute w-full self-center bg-black bg-opacity-60 backdrop-blur-lg translate-y-[6rem] rounded p-2 flex flex-col max-h-[15rem] overflow-auto ${style.temp}`}
        >
          {getItems(filteredItems, handleClick)}
        </div>
      )}
    </>
  );
}

function getItems(items, handleClick) {
  return items.map((item, index) => {
    return (
      <p
        key={index}
        className={
          "text-white text-2xl px-10 cursor-pointer hover:text-project-orange"
        }
        onMouseDown={handleClick}
      >
        {item}
      </p>
    );
  });
}

export default SuggestionBox;
