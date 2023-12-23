import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./Pages/ErrorPage";
import { QuemSomos } from "./Pages/QuemSomos";
import { InvisaLign } from "./Pages/InvisaLign";
import { Tratamentos } from "./Pages/Tratamentos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/quem-somos",
    element: <QuemSomos />,
  },
  {
    path: "/aparelho-invisalign",
    element: <InvisaLign />,
  },
  {
    path: "/tratamentos",
    element: <Tratamentos />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
