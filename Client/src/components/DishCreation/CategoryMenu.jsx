import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";
import { FaCheck } from "react-icons/fa6";

CategoryMenu.propTypes = {
  isOpened: PropTypes.bool,
  setIsOpened: PropTypes.func,
  setValue: PropTypes.func,
  chosenValue: PropTypes.string,
  setChosenValue: PropTypes.func,
  items: PropTypes.array,
};

function CategoryMenu({
  isOpened,
  setIsOpened,
  value,
  categoryList,
  dishCategories,
  setDishCategories,
}) {
  function getItem(category) {
    return (
      <>
        {(category.toLowerCase().includes(value) || !value) && (
          <div className={"relative group"} key={category}>
            <p
              className={`w-full outline-0 text-lg p-3 hover:bg-project-orange cursor-pointer ${dishCategories.includes(category) ? "text-project-orange" : null} hover:text-white`}
              onClick={(e) => {
                addCategory(e, category);
              }}
            >
              {category}
            </p>

            {dishCategories.includes(category) && (
              <FaCheck
                className={
                  "absolute top-1/2 -translate-y-1/2 text-xl text-project-orange group-hover:text-white right-4"
                }
              />
            )}
          </div>
        )}
      </>
    );
  }

  function addCategory(e, category) {
    if (dishCategories.includes(category)) {
      toast.error("Can't add the same category twice.");
    } else {
      setDishCategories((currentValue) => {
        return [...currentValue, category];
      });
      setIsOpened(false);
    }
  }

  return (
    <div
      className={`absolute w-full bg-white border rounded-b-lg translate-y-2 ${isOpened ? "max-h-36" : "max-h-0 border-0"} overflow-y-scroll custom-scrollbar transition-all ease-linear z-10`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {categoryList.map((item) => getItem(item))}
    </div>
  );
}

export default CategoryMenu;
