import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";
import "../shared/base.scss";
import { setTokenInHeaders } from "../utils/token";

const accessToken = localStorage.getItem("access_token");
if (accessToken) {
  setTokenInHeaders("access_token");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
