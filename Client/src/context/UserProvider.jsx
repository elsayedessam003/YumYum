import { createContext, useState } from "react";
import PropTypes from "prop-types";

UserProvider.propTypes = {
  children: PropTypes.node,
};

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
