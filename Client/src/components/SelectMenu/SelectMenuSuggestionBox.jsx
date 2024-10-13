import PropTypes from "prop-types";
import style from "./SelectMenuSuggestionBox.module.css";

SelectMenuSuggestionBox.propTypes = {
  items: PropTypes.array,
  setIsFocused: PropTypes.func,
  setChoice: PropTypes.func,
  onChoice: PropTypes.func,
};

function SelectMenuSuggestionBox({
  items = [],
  setIsFocused,
  setChoice,
  onChoice,
}) {
  return (
    <div
      className={`absolute w-40 bg-white top-1/2 pt-5 px-6 pb-4 rounded-b-[2rem] border border-project-orange border-t-0 opacity-0 ${style.box}`}
    >
      <div className={`h-full overflow-y-scroll p-1 ${style.temp}`}>
        {getItems(items, setIsFocused, setChoice)}
      </div>
    </div>
  );
}

function getItems(items, setIsFocused, setChoice) {
  return items.map((item, index) => {
    return (
      <p
        key={index}
        className={
          "py-1 px-1 bg-white rounded cursor-pointer hover:bg-project-orange hover:text-white overflow-hidden"
        }
        onClick={() => {
          setChoice(item);
          setIsFocused((value) => {
            return false;
          });
        }}
      >
        {item}
      </p>
    );
  });
}

export default SelectMenuSuggestionBox;
