import PropTypes from "prop-types";
import style from "./SuggestionBox.module.css";

SuggestionBox.propTypes = {
  items: PropTypes.array.isRequired,
  setSearch: PropTypes.func.isRequired,
};

function SuggestionBox({ items, setSearch }) {
  function handleClick(e) {
    setSearch(e.target.textContent);
  }
  return (
    <div
      className={`absolute w-full self-center bg-black translate-y-[6rem] rounded-l-3xl p-2 flex flex-col h-[15rem] overflow-auto ${style.temp}`}
    >
      {getItems(items, handleClick)}
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
