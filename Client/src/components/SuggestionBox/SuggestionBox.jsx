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
      {filteredItems.length > -1 && (
        <div
          className={`absolute w-full self-center bg-white bg-opacity-[0.19] backdrop-blur-[1px] border-b-2 border-x-2 border-project-orange top-[99%] pb-4 rounded p-2 flex flex-col max-h-[15rem] rounded-b-3xl `}
        >
          <div className={`overflow-auto ${style.scroll}`}>
            {getItems(filteredItems, handleClick, hoveredItem, setHoveredItem)}
          </div>
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
          isBlurred ? "opacity-40" : ""
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
