import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Input from "../Input.jsx";
import ImageInput from "../ImageInput.jsx";
import Button from "../Button/Button.jsx";
import CategoryPicker from "./CategoryPicker.jsx";
import { toast } from "react-hot-toast";

DishCreation.propTypes = {
  dish: PropTypes.object,
  setRestaurantDishes: PropTypes.func,
  categories: PropTypes.array,
  setIsOpened: PropTypes.func,
};

function DishCreation({
  dish,
  index,
  setDish,
  setRestaurantDishes,
  categories,
  setIsOpened,
}) {
  const [dishName, setDishName] = useState(dish?.name || "");
  const [dishDescription, setDishDescription] = useState(
    dish?.description || "",
  );
  const [dishPrice, setDishPrice] = useState(dish?.price || "");
  const [dishImage, setDishImage] = useState(dish?.image || null);
  const [dishCategories, setDishCategories] = useState(dish?.categories || []);

  const background = useRef(null);

  function handleClose() {
    setDish(null);
    setIsOpened(false);
  }

  function handleSubmit() {
    if (dish) {
      setRestaurantDishes((currentValue) => {
        return currentValue.filter((_, i) => {
          return i !== index;
        });
      });
    }

    if (dishCategories.length > 0) {
      const dish = {
        name: dishName,
        description: dishDescription,
        price: dishPrice,
        image: dishImage,
        categories: dishCategories,
      };

      setRestaurantDishes((currentValue) => [...currentValue, dish]);

      setIsOpened(false);
      setDish(null);
    } else {
      toast.error("Add at least one category.");
    }
  }

  return (
    <div
      className={
        "fixed inset-0 w-full h-full bg-black/40 z-50 flex justify-center items-center"
      }
      onClick={(e) => {
        if (e.target === background.current) handleClose();
      }}
      ref={background}
    >
      <div
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={"bg-white flex flex-col gap-20 p-8 rounded-3xl"}>
          <p className={"text-3xl font-semibold"}>Manage Dish</p>

          <div className={"flex flex-col gap-4"}>
            <p className={"text-xl font-medium"}>Dish details</p>

            <div
              className={"grid grid-cols-2 grid-flow-col gap-4 items-center"}
            >
              <Input
                className={"col-span-1 w-full"}
                value={dishName}
                setValue={setDishName}
                placeHolder={"dish name"}
                isRequired={true}
              />

              <Input
                className={"col-span-1 w-full"}
                value={dishDescription}
                setValue={setDishDescription}
                placeHolder={"Dish description"}
                isRequired={true}
              />

              <Input
                className={"col-span-1 w-full"}
                value={dishPrice}
                setValue={setDishPrice}
                placeHolder={"Dish price (In EGP)"}
                type={"number"}
                isRequired={true}
              />

              <ImageInput
                text={"a dish picture"}
                size={"small"}
                value={dishImage}
                setValue={setDishImage}
                className={"row-span-3 w-full"}
                height={"h-[194px]"}
                isRequired={true}
              />
            </div>
          </div>

          <div className={"flex flex-col gap-4"}>
            <p className={"text-xl font-medium"}>Dish categories</p>

            <CategoryPicker
              categoryList={categories}
              dishCategories={dishCategories}
              setDishCategories={setDishCategories}
            />
          </div>

          <div className={"w-full flex gap-4"}>
            <Button
              color={"white"}
              className={"w-full py-4 rounded-xl"}
              onClick={handleSubmit}
            >
              Save dish
            </Button>

            <Button
              variant={"outline"}
              className={"w-full py-4 rounded-xl"}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishCreation;
