import React from "react";
import { Navigate } from "react-router-dom";
import AdminPage from "../src/pages/AdminPage";
import ClientPage from "../src/pages/ClientPage";

function DashboardRoute({ authenticated }) {
  if (!authenticated) {
    return <Navigate to="/login" />;
  }
  return authenticated.userRole === "admin" ? <AdminPage /> : <ClientPage />;
}

export default DashboardRoute;
