// components/AdminDashboard.js
import React from "react";
import { useAuth } from "../context/AuthContext";
import { AuthProvider } from "../context/AuthContext";

function AdminDashboard() {
  const { user } = useAuth();

  return (
    <AuthProvider>

    <div>
      <h2>Admin Dashboard</h2>
      {user && user.role === "admin" && (
        <div>
          {/* Mostrar funcionalidades para administradores */}
        </div>
      )}
    </div>
    </AuthProvider>

  );
}

export default AdminDashboard;
