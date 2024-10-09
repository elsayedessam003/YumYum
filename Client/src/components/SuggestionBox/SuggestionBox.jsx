import PropTypes from "prop-types";
import style from "./SuggestionBox.module.css";
import { useEffect, useState } from "react";

SuggestionBox.propTypes = {
  items: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
};

function SuggestionBox({ items, search = "", setSearch, isOpened }) {
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
  }, [search, items]);

  function handleClick(e) {
    setSearch(e.target.textContent);
  }

  return (
    <>
      <div
        className={`absolute w-full self-center bg-white bg-opacity-[0.19] backdrop-blur-[1px] border-b-2 border-x-2  top-[99%] pb-4 rounded p-2 flex flex-col max-h-[15rem] rounded-b-3xl ${isOpened ? "border-project-orange" : "invisible h-0 border-transparent"} transition-all ease-linear duration-300`}
      >
        <div className={`overflow-auto ${style.scroll}`}>
          {getItems(filteredItems, handleClick, hoveredItem, setHoveredItem)}
        </div>
      </div>
    </>
  );
}

function getItems(items, handleClick, hoveredItem, setHoveredItem) {
  return items.map((item, index) => {
    return (
      <p
        key={index}
        className={`text-white text-2xl px-10 py-1 cursor-pointer hover:text-project-orange hover:pl-14 bg-opacity-100 transition-all ease-linear`}
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
