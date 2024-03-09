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
        errorElement: <Error />,
        children: [
          {
            path: "/photos/china",
            element: <PicPanel />,
            errorElement: <Error />,
          },
          {
            path: "/photos/colombia",
            element: <PicPanel />,
            errorElement: <Error />,
          },
          {
            path: "/photos/ireland",
            element: <PicPanel />,
            errorElement: <Error />,
          },
          {
            path: "/photos/italy",
            element: <PicPanel />,
            errorElement: <Error />,
          },
          {
            path: "/photos/japan",
            element: <PicPanel />,
            errorElement: <Error />,
          },
          {
            path: "/photos/portugal",
            element: <PicPanel />,
            errorElement: <Error />,
          },
          {
            path: "/photos/qatar",
            element: <PicPanel />,
            errorElement: <Error />,
          },
          {
            path: "/photos/sweden",
            element: <PicPanel />,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: "/art",
        element: <ArtPanel />,
        errorElement: <Error />,
        children: [
          {
            path: "/art/inkdrawing",
            element: <ArtPanel />,
            errorElement: <Error />,
          },
          {
            path: "/art/sumi",
            element: <ArtPanel />,
            errorElement: <Error />,
          },
          {
            path: "/art/suminagashi",
            element: <ArtPanel />,
            errorElement: <Error />,
          },
          {
            path: "/art/ukiyo",
            element: <ArtPanel />,
            errorElement: <Error />,
          },
        ]
      },
      {
        path: "/info",
        element: <Info />,
        errorElement: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
