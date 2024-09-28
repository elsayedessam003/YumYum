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
  const [hoveredItem, setHoveredItem] = useState(null);

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
          {getItems(filteredItems, handleClick, hoveredItem, setHoveredItem)}
        </div>
      )}
    </>
  );
}

function getItems(items, handleClick, hoveredItem, setHoveredItem) {
  return items.map((item, index) => {
    const isBlurred = hoveredItem !== null && hoveredItem !== index;

    return (
      <p
        key={index}
        className={`text-white text-2xl px-10 cursor-pointer hover:text-project-orange bg-opacity-100 ${
          isBlurred ? "blur-sm" : ""
        }`}
        onMouseDown={handleClick}
        onMouseEnter={() => setHoveredItem(index)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        {item}
      </p>
    );
  });
}

export default SuggestionBox;
