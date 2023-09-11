import React from "react";
import Layout from "../../components/userDashboard/UserLayout";
import { Outlet } from "react-router-dom";

function UserMainContent() {
  const mainContentStyle = {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "5px",
    margin:"300px",
  };

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  return (
    <Layout>
      <div style={mainContentStyle}>
        <h2 style={headerStyle}>Contenido Principal MAIN</h2>
        <p>
          Aquí puedes acceder a tus funciones y contenido personalizado.
        </p>
        <Outlet />
      </div>
    </Layout>
  );
}

export default UserMainContent;
