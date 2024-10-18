import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaAngleDown } from "react-icons/fa";
import hours from "../Hours.jsx";
import SelectMenu from "../Select/SelectMenu.jsx";
import CategoryMenu from "./CategoryMenu.jsx";
import Category from "./Category.jsx";

CategoryPicker.propTypes = {};

function CategoryPicker({
  categoryList,
  dishCategories,
  setDishCategories,
  className,
}) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className={`w-full relative ${className}`}>
      <div
        className={`flex items-center rounded-lg border ${focused ? "border-project-orange" : ""} flex-wrap p-3 gap-2 max-w-[1043px]`}
      >
        {dishCategories.map((name, index) => (
          <Category
            name={name}
            index={index}
            setItems={setDishCategories}
            key={name}
          />
        ))}

        <div className={"relative h-full flex-1 min-w-[50%]"}>
          <input
            className={`outline-0 text-lg flex items-center justify-between w-full`}
            value={value}
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={(e) => {
              setTimeout(() => {
                setFocused(false);
              }, 100);
            }}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></input>

          <FaAngleDown
            className={`absolute top-1/2 -translate-y-1/2 text-black/40 right-2.5 ${focused ? "-rotate-180 text-project-orange" : ""} transition-all ease-linear`}
          />

          <div
            className={`absolute left-0 pointer-events-none bg-white ${value || focused ? "hidden" : "top-1/2 -translate-y-1/2 text-lg"} ${focused ? "text-project-orange" : "text-black/40"} transition-all ease-linear flex items-center`}
          >
            Enter a category
          </div>
        </div>
      </div>

      <CategoryMenu
        isOpened={focused}
        setIsOpened={setFocused}
        value={value}
        categoryList={categoryList}
        dishCategories={dishCategories}
        setDishCategories={setDishCategories}
      />
    </div>
  );
}

export default CategoryPicker;
