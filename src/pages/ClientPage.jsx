import React from "react";
import { AppContext } from "../context/AppContext";
import ClientComponent from "../components/users/ClientComponent";

function ClientPage() {
  const { user } = AppContext();

  return (
    <div>
      <h2>ClientPage</h2>
      {user.role === "cliente" && (
        <div>
          <ClientComponent />
        </div>
      )}
    </div>
  );
}

export default ClientPage;
