import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import PicPanel from "./components/PicPanel.jsx";
import ArtPanel from "./components/ArtPanel.jsx";
import Info from "./components/Info.jsx";
import Error from "./components/Error.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: true,
        path: "/photos",
        element: <PicPanel />,
      },
      {
        index: true,
        path: "/art",
        element: <ArtPanel />,
      },
      {
        index: true,
        path: "/info",
        element: <Info />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
