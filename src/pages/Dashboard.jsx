import React from "react";
import { useAuth } from "../context/AuthContext";
import AdminPage from "../pages/AdminPage";
import ClientPage from "../pages/ClientPage";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      {user && user.role === "admin" ? (
        <AdminPageContent />
      ) : (
        <ClientPageContent />
      )}
    </div>
  );
}

function AdminPageContent() {
  return (
    <div>
      <h3>Contenido para Administradores</h3>
      <AdminPage />
    </div>
  );
}

function ClientPageContent() {
  return (
    <div>
      <h3>Contenido para Clientes</h3>
      <ClientPage />
    </div>
  );
}

export default Dashboard;
