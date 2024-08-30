/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const { loggedUser } = useContext(AuthContext);

  return loggedUser ? children : <Navigate to="/" />;
}
