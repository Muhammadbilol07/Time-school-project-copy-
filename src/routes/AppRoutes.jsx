// react router dom
import { createBrowserRouter } from "react-router-dom";

// layouts
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

// routes defenders
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// main pages
import Home from "../pages/main/Home/Home";
import Course from "../pages/main/Courses/Course";
import Connection from "../pages/main/Connection/Connection";
import Login from "../pages/auth/login/Login";
import Result from "../pages/main/Results/Result";
import Teachers from "../pages/main/Teachers/Teachers";

// admin pages
import AdminHome from "../pages/admin/Home/AdminHome";

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
            path: "/courses",
            element: <Course />,
          },
          {
            path: "/connection",
            element: <Connection />,
          },
          {
            path: "/results",
            element: <Result />,
          },
          {
            path: "/teachers",
            element: <Teachers />,
          },
        ],
      },
    ],
  },

  {
    path: '/admin5437/',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHome />
      }
    ]    
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
