import React from "react";
import AdminPage from "../pages/AdminPage";
import ClientPage from "../pages/ClientPage";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      {user && user.role === "admin" ? <AdminPage /> : <ClientPage />}
      {/* Otros componentes y contenido */}
    </div>
  );
}

export default Dashboard;
