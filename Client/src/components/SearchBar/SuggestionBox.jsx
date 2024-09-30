import PropTypes from "prop-types";
import style from "./SuggetionBox.module.css";

SuggestionBox.propTypes = {
  items: PropTypes.array,
};

function SuggestionBox({ items = [] }) {
  return (
    <div
      className={`absolute w-full bg-project-offWhite translate-y-1/2 pt-5 px-6 pb-6 rounded-b-[2rem] ${style.box}`}
    >
      <div className={`h-full overflow-y-scroll p-3 ${style.temp}`}>
        {getItems(items)}
      </div>
    </div>
  );
}

function getItems(items) {
  return items.map((item, index) => {
    return (
      <p
        key={index}
        className={
          "py-1 px-4 bg-project-offWhite rounded cursor-pointer hover:bg-project-orange hover:text-white"
        }
      >
        {item}
      </p>
    );
  });
}

export default SuggestionBox;
