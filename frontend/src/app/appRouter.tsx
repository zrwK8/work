import { createBrowserRouter } from "react-router-dom";
import { appLayout } from "./appLayout";
import NotFoundPage from "../pages/404";
import Home from "../pages/main";
import Login from "../pages/login";
import Register from "../pages/register";

export const appRouter = createBrowserRouter([
  {
    // path: "/",
    // element: appLayout,
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
    ],
  },
]);
