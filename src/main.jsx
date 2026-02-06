import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./routes/Router.jsx";
createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>,
);
