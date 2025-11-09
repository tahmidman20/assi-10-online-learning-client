import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./components/layouts/RootLayout.jsx";
import Home from "./components/Home/Home.jsx";
import Courses from "./components/courses/Courses.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "courses",
        Component: Courses,
      },
      {
        path: "dashboard ",
        Component: Dashboard,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
