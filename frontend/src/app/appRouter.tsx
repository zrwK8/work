import { createBrowserRouter } from "react-router-dom";
import { appLayout } from "./appLayout";
import NotFoundPage from "../pages/404";
import Home from "../pages/main";

export const appRouter = createBrowserRouter([
     {
          // path: "/",
          // element: appLayout,
          errorElement: <NotFoundPage />,
          children: [{
               path: "/",
               element: <Home />
          }]
     }
])