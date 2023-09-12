import React from "react";
import { Outlet } from "react-router-dom";
import HeaderDashboard from "./HeaderDashboard";
import Sidebar from "./Sidebar";

function MainContent() {
  return (
    <div className="app-container">
      <HeaderDashboard />
      <Sidebar />
      <div className="content-container">
        <main className="main-content">
          <h2>Contenido Principal</h2>
          <p>
            Bienvenido al panel de administración. Aquí puedes ver estadísticas,
            gestionar usuarios y configurar tu aplicación.
          </p>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainContent;