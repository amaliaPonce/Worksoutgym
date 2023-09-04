import React from "react";

function HeaderDashboard() {
  return (
    <header className="header-dashboard">
      <h1>Dashboard de Administrador</h1>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Usuarios</a></li>
          <li><a href="#">Configuración</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderDashboard;
