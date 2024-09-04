/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

export const ProtectedRoute = () => {
  const { token } = useAuth();

  // Verifa se usuárior está autenticado
  if (!token) {
    // Se não estiver autenticado, rediciona para /login
    return <Navigate to="/" />;
  }

  // Se usuário está autenticado, direciona para as rotas filhas
  return <Outlet />;
};
