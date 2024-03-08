import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import PicPanel from "./components/PicPanel.jsx";
import ArtPanel from "./components/ArtPanel.jsx";
import Info from "./components/Info.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/photos",
        element: <PicPanel />,
        children: [
          {
            path: "/photos/china",
            element: <PicPanel />,
          },
          {
            path: "/photos/colombia",
            element: <PicPanel />,
          },
          {
            path: "/photos/ireland",
            element: <PicPanel />,
          },
          {
            path: "/photos/japan",
            element: <PicPanel />,
          },
          {
            path: "/photos/portugal",
            element: <PicPanel />,
          },
        ],
      },
      {
        path: "/art",
        element: <ArtPanel />,
        children: [
          {
            path: "/art/art1",
            element: <ArtPanel />,
          },
          {
            path: "/art/art2",
            element: <ArtPanel />,
          },
          {
            path: "/art/art3",
            element: <ArtPanel />,
          },
          {
            path: "/art/art4",
            element: <ArtPanel />,
          },
          {
            path: "/art/art5",
            element: <ArtPanel />,
          },
        ]
      },
      {
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
