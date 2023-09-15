import React, { useState, useContext } from "react";
import "../../styles/adminDashboard/headerAdmin.css";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

function HeaderDashboard() {
  const [menuActive, setMenuActive] = useState(false);
  const { logout } = useContext(AppContext);
  const navigate = useNavigate(); // Obtiene la función de navegación

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirige al usuario a la página principal
  };

  return (
    <header className={`header-dashboard ${menuActive ? "menu-active" : ""}`}>
      <h1>Administrador</h1>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <nav>
        <ul>
          <li>
          
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderDashboard;
