import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./components/layouts/RootLayout.jsx";
import Home from "./components/Home/Home.jsx";
import Courses from "./components/courses/Courses.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";

import Login from "./components/authentication/Login.jsx";
import AuthProvider from "./components/context/AuthProvider.jsx";
import Register from "./components/authentication/Register.jsx";
import { ToastContainer } from "react-toastify";
import ViewDetails from "./pages/ViewDetails.jsx";

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
        path: "dashboard",
        Component: Dashboard,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "details/:id",
        element: <ViewDetails></ViewDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>
);
