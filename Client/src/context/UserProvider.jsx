import { createContext, useState } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

UserProvider.propTypes = {
  children: PropTypes.node,
};

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  if (!user) {
    const userCookie = Cookies.get("user");
    if (userCookie) setUser(JSON.parse(userCookie));
  }

  if (!token) {
    const tokenCookie = Cookies.get("token");
    if (tokenCookie) setToken(tokenCookie);
  }

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
