import React from "react";
import ReactDOM from "react-dom/client";
import "./app/styles/index.scss";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./app/appRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);
