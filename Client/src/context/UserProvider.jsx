import { createContext, useState } from "react";
import PropTypes from "prop-types";

UserProvider.propTypes = {
  children: PropTypes.node,
};

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cart: {
      dishes: [
        {
          name: "Special dish perfecto",
          restaurant: "Burger Queen",
          price: 10,
          count: 2,
          image: "/Dish Image.png",
        },
        {
          name: "Special dish perfecto",
          restaurant: "Burger Queen",
          price: 10,
          count: 2,
          image: "/Dish Image.png",
        },
        {
          name: "Special dish perfecto",
          restaurant: "Burger Queen",
          price: 10,
          count: 2,
          image: "/Dish Image.png",
        },
        {
          name: "Special dish perfecto",
          restaurant: "Burger Queen",
          price: 10,
          count: 2,
          image: "/Dish Image.png",
        },
        {
          name: "Special dish perfecto",
          restaurant: "Burger Queen",
          price: 10,
          count: 2,
          image: "/Dish Image.png",
        },
        {
          name: "Special dish perfecto",
          restaurant: "Burger Queen",
          price: 10,
          count: 2,
          image: "/Dish Image.png",
        },
      ],
    },
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
