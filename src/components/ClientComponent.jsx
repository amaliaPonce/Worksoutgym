import React from "react";
import { useAuth } from "../context/AuthContext";

function ClientComponent() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Cliente Dashboard</h2>
      {user && user.role === "client" && (
        <div>
          {/* Mostrar funcionalidades para usuarios clientes */}
        </div>
      )}
    </div>
  );
}

export default ClientComponent;
