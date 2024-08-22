import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home.tsx";
import { Contact } from "./pages/Contact/Contact.tsx";
import { Pricing } from './pages/Pricing/Pricing.tsx';
import { About } from './pages/About/About.tsx';

const router = createBrowserRouter([
  {
    path: "/Albino/",
    element: <App />,
    children: [
      {
        path: "/Albino/",
        element: <Home />,
      },
      {
        path: "/Albino/contact",
        element: <Contact />,
      },
      {
        path: "/Albino/pricing",
        element: <Pricing />,
      },
      {
        path: "/Albino/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);