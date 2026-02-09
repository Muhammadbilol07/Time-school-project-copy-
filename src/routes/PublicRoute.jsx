import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const { user } = useAuth();
 
  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
