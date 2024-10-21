import PropTypes from "prop-types";
import { CgSearch } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa6";
import SuggestionBox from "./SuggestionBox/SuggestionBox.jsx";
import { useContext, useState } from "react";
import Button from "./Button/Button.jsx";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider.jsx";

HomeSearchBar.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  items: PropTypes.array,
};

function HomeSearchBar({ placeHolder, items = [] }) {
  const [isFocused, setIsFocused] = useState(false);
  const { cityName, setCityName } = useContext(UserContext);
  const navigate = useNavigate();

  function handleClick() {
    if (cityName) {
      navigate(`/${cityName}`);
    }
  }

  return (
    <div className={" w-[85%] max-w-[37rem] relative flex flex-col"}>
      <div
        className={`flex items-center border-t-2 border-x-2  bg-white bg-opacity-[0.19] py-6 px-10 backdrop-blur-[1px] ${isFocused ? "rounded-t-3xl border-project-orange delay-0" : "border-transparent rounded-3xl duration-200 delay-300 overflow-hidden"} z-10 transition-all ease-in-out`}
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
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          onChange={(e) => {
            setCityName(e.target.value);
          }}
          value={cityName}
        />
        <Button variant={"text"} size={"fit"} onClick={handleClick}>
          <FaArrowRight
            className={"text-3xl hover:text-white transition-all ease-in-out"}
          />
        </Button>
      </div>

      <SuggestionBox
        items={items}
        search={cityName}
        setSearch={setCityName}
        isOpened={isFocused}
      />
    </div>
  );
}

export default HomeSearchBar;
