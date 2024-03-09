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
        errorElement: <Error />,
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
            path: "/photos/italy",
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
          {
            path: "/photos/qatar",
            element: <PicPanel />,
          },
          {
            path: "/photos/sweden",
            element: <PicPanel />,
          },
        ],
      },
      {
        path: "/art",
        element: <ArtPanel />,
        children: [
          {
            path: "/art/inkdrawing",
            element: <ArtPanel />,
          },
          {
            path: "/art/sumi",
            element: <ArtPanel />,
          },
          {
            path: "/art/suminagashi",
            element: <ArtPanel />,
          },
          {
            path: "/art/ukiyo",
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
