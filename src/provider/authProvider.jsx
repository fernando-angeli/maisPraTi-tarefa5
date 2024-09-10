/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const userData = localStorage.getItem("loggedUser");
    if (userData) {
      setLoggedUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    if (token) {
      //SE EXISTIR UM TOKEN VALIDO, O PASSARIAMOS POR DEFAULT PARA O AXIOS (CASO NECESSITE VARIAS REQUESTS NA MESMA API)
      //axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);
    } else {
      //CASO O TOKEN NÁO EXISTA ELE LIMPARIA O TOKEN DEFAULT DO AXIOS
      //delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  const loginUser = (userData) => {
    setLoggedUser(userData);
    localStorage.setItem("loggedUser", JSON.stringify(userData));
  };

  const logout = () => {
    setLoggedUser(null);
    setToken(null);
    localStorage.removeItem("loggedUser");
  };

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      loggedUser,
      loginUser,
      logout,
    }),
    [token, loggedUser]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
