import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";

Dish.propTypes = {
  dish: PropTypes.object,
  setIsAddingDish: PropTypes.func,
  setManageDish: PropTypes.func,
  index: PropTypes.number,
  setRestaurantDishes: PropTypes.func,
};

function Dish({
  dish,
  setIsAddingDish,
  setManageDish,
  index,
  setRestaurantDishes,
}) {
  function getCategories() {
    return dish.categories.reduce(
      (previousValue, currentValue) => `${previousValue}, ${currentValue}`,
    );
  }

  function handleDelete() {
    setRestaurantDishes((currentValue) => {
      return currentValue.filter((_, i) => {
        return i !== index;
      });
    });
  }

  function handleManage() {
    setManageDish(index);
    setIsAddingDish(true);
  }

  return (
    <div className={"grid grid-cols-3 border-b py-6"}>
      <p className={"text-xl text-black/70"}>{dish.name}</p>

      <p className={"text-xl text-black/70 text-center truncate"}>
        {getCategories()}
      </p>

      <div className={"flex gap-4 justify-end"}>
        <Button
          variant={"text"}
          className={"text-project-red hover:text-project-red/70"}
          onClick={handleDelete}
        >
          Delete
        </Button>

        <Button color={"white"} rounding={"full"} onClick={handleManage}>
          Manage
        </Button>
      </div>
    </div>
  );
}

export default Dish;
