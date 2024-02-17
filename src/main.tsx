import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./Pages/ErrorPage";
import { QuemSomos } from "./Pages/QuemSomos";
import { InvisaLign } from "./Pages/InvisaLign";
import { Tratamentos } from "./Pages/Tratamentos";
import { Implante } from "./Pages/Implante";
import { Facetas } from "./Pages/Facetas";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
  {
    path: "/implante-dentario",
    element: <Implante />,
  },
  {
    path: "/facetas-resina",
    element: <Facetas />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>
          Mari Odontologia | Dentista e Tratamento Ortodontista em Guarujá
        </title>
      </Helmet>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
