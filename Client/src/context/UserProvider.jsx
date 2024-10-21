import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import axiosInstance from "../config/axios.instance.js";

UserProvider.propTypes = {
  children: PropTypes.node,
};

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [cart, setCart] = useState(null);
  const [cityName, setCityName] = useState("");

  if (!user) {
    const userCookie = Cookies.get("user");
    if (userCookie) setUser(JSON.parse(userCookie));
  }

  if (!token) {
    const tokenCookie = Cookies.get("token");
    if (tokenCookie) setToken(tokenCookie);
  }

  useEffect(() => {
    async function getCart() {
      try {
        const { status, data } = await axiosInstance.get("cart", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (199 < status <= 299) {
          setCart(data.data);
        }
      } catch (e) {
        console.error(e.message);
      }
    }

    getCart();
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        cart,
        setCart,
        cityName,
        setCityName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
