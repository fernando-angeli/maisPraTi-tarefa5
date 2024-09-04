import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Translator from "../pages/translator/Translator";
import MovieSearchEngine from "../pages/movieSearchEngine/MovieSearchEngine";
import QRCodeGenerator from "../pages/qr-code/QrCodeGenerator";
import SearchIp from "../pages/searchIp/SearchIp";
import ToDoList from "../pages/toDoList/ToDoList";
import { Home } from "../pages/home/home";

const Routes = () => {
  const { token } = useAuth();

  const routesForNotAuthenticatedONly = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/translator",
          element: <Translator />,
        },
        {
          path: "/moviesSearch",
          element: <MovieSearchEngine />,
        },
        {
          path: "/qrCodeGenerator",
          element: <QRCodeGenerator />,
        },
        {
          path: "/searchIp",
          element: <SearchIp />,
        },
        {
          path: "/toDoList",
          element: <ToDoList />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([
    ...(!token ? routesForNotAuthenticatedONly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
