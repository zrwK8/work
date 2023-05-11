import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/404";
import Home from "../pages/main";
import Login from "../pages/login";
import Register from "../pages/register";
import Profile from "../pages/profile";

export const appRouter = createBrowserRouter([
  {
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
