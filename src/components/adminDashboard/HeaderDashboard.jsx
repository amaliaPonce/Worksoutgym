import React from "react";
import "../../styles/headerAdmin.css"
function HeaderDashboard() {
  return (
    <header className="header-dashboard">
      <h1>Dashboard de Administrador</h1>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Perfil</a></li>
          <li><a href="#">Ejercicios Favoritos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderDashboard;
