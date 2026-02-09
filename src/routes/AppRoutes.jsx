// react router dom
import { createBrowserRouter } from "react-router-dom";
// layouts
import MainLayout from "../layouts/MainLayout";
// routes defenders
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
// pages
import Home from "../pages/main/Home/Home";
import Course from "../pages/main/courses/Course";
import Connection from "../pages/main/connection/Connection";
import Login from "../pages/auth/login/Login";

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Login />,
          },
        ],
      },
    ],
  },

  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: '/courses',
            element: <Course />
          },
          {
            path: '/connection',
            element: <Connection />
          }
        ],
      },
    ],
  },

  {
    path: "*",
    element: (
      <h1 className="text-[#FFC107] font-black text-5xl justify-between text-center mt-16">
        404 Page Not Found
      </h1>
    ),
  },
]);
