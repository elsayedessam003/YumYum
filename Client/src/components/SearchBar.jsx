import PropTypes from "prop-types";
import { CgSearch } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa6";

SearchBar.propTypes = {
  placeHolder: PropTypes.string.isRequired,
};

function SearchBar({ placeHolder }) {
  return (
    <div
      className={
        "flex items-center w-[30%]  bg-white bg-opacity-[0.19] rounded-3xl py-6 px-10"
      }
    >
      <CgSearch className={"text-white text-4xl"} />
      <input
        type="text"
        name="restaurant"
        placeholder={placeHolder}
        className={
          "h-full w-full text-2xl px-6 bg-transparent border-0 focus:outline-none text-white text-opacity-[0.69]"
        }
        autoComplete={"off"}
      />
      <FaArrowRight className={"text-project-orange text-3xl"} />
    </div>
  );
}

export default SearchBar;
