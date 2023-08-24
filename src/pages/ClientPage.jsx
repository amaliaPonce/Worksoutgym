import React from "react";
import { useAuth } from "../context/AuthContext";
import ClientComponent from "../components/ClientComponent";

function ClientPage() {
  const { user } = useAuth();

  return (
    <div>
      <h2>ClientPage</h2>
      {user && user.role === "client" && (
        <div>
          <ClientComponent />
        </div>
      )}
    </div>
  );
}

export default ClientPage;
