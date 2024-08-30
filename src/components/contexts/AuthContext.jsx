/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("loggedUser");
    if (userData) {
      setLoggedUser(JSON.parse(userData));
    }
  }, []);

  const login = (userData) => {
    setLoggedUser(userData);
  };

  const logout = () => {
    setLoggedUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedUser, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
