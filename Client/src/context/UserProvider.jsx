import { createContext, useState } from "react";
import PropTypes from "prop-types";

UserProvider.propTypes = {
  children: PropTypes.node,
};

export const UserContext = createContext();

function UserProvider({ children }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <UserContext.Provider
      value={{ username, setUsername, email, setEmail, password, setPassword }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
