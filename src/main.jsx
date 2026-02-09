// react
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// react router dom
import { RouterProvider } from "react-router-dom";
// routers
import { router } from "./routes/AppRoutes";
// context
import { AuthProvider } from "./context/AuthContext";
// css
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
