import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/404";
import Home from "../pages/main";
import Login from "../pages/login";
import Register from "../pages/register";
import Profile from "../pages/profile";
import { HomeRedirect, LoginRedirect } from "./protectedRoutes";
import Dashboard from "../pages/dashboard";

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
        element: (
          <HomeRedirect>
            <Login />
          </HomeRedirect>
        ),
      },
      {
        path: "/register",
        element: (
          <HomeRedirect>
            <Register />
          </HomeRedirect>
        ),
      },
      {
        path: "/profile",
        element: (
          <LoginRedirect>
            <Profile />
          </LoginRedirect>
        ),
      },

      {
        path: "/dashboard",
        element: (
          <LoginRedirect>
            <Dashboard />
          </LoginRedirect>
        ),
      },

      {
        path: "/dashboard/users",
        element: (
          <LoginRedirect>
            <Dashboard />
          </LoginRedirect>
        ),
      },

      {
        path: "/dashboard/vacancies",
        element: (
          <LoginRedirect>
            <Dashboard />
          </LoginRedirect>
        ),
      },
    ],
  },
]);
