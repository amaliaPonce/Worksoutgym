import React, { useState } from "react";
import "../../styles/adminDashboard/headerAdmin.css";

function HeaderDashboard() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`header-dashboard ${menuActive ? "menu-active" : ""}`}>
      <h1>Administrador</h1>
      {/* Icono del menú solo visible en pantallas pequeñas */}
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <nav>
        <ul>
          {/* Elementos de navegación */}
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Perfil</a></li>
          <li><a href="#">Mis Favoritos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderDashboard;
