import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";
import "../shared/base.scss";
import axios from "axios";

const accessToken = localStorage.getItem("access_token");
if (accessToken) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
