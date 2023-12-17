import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './Pages/ErrorPage';
import { QuemSomos } from './Pages/QuemSomos';
import Header from './Components/header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,

  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/quem-somos",
    element: <QuemSomos/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header /> 
    <RouterProvider router={router} />
  </React.StrictMode>
);
