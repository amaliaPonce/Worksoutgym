import React from "react";
import { useAuth } from "../context/AuthContext";

function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {user && user.role === "admin" && (
        <div>
          {/* Mostrar funcionalidades para administradores */}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
