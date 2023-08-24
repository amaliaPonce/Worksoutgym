import React from "react";
import { useAuth } from "../context/AuthContext";
import AdminComponent from "../components/AdminComponent";

function AdminPage() {
  const { user } = useAuth();

  return (
    <div>
      <h2>AdminPage</h2>
      {user && user.role === "admin" && (
        <div>
          <AdminComponent />
        </div>
      )}
    </div>
  );
}

export default AdminPage;

// Esta es la página principal del usuario administrador
