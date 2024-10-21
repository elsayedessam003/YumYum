import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axioIinstance from "../config/axios.instance.js";
import DishCard from "./DishCard/DishCard.jsx";

RestaurantDishSection.propTypes = {};

function RestaurantDishSection({ category, restaurantId, setProduct }) {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const params = { restaurantId: restaurantId };

    if (category === "Top dishes") {
      params["limit"] = 8;
    } else {
      params["categories"] = category;
    }

    async function getDishes() {
      try {
        const { status, data } = await axioIinstance.get(`dishes`, {
          params: params,
        });

        setDishes(data.data.dishes);
      } catch (e) {
        console.error(e.message);
      }
    }

    getDishes();
  }, []);

  return (
    <div className="grid lg:grid-cols-[repeat(auto-fill,minmax(614px,1fr))] gap-4">
      {dishes.map((dish, index) => (
        <DishCard
          key={dish._id}
          id={dish._id}
          name={dish.name}
          description={dish.description}
          price={dish.price}
          image={dish.imageUrl}
          setProduct={setProduct}
        />
      ))}
    </div>
  );
}

export default RestaurantDishSection;
