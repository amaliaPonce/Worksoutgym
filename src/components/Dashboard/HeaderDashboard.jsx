import React, { useState, useContext } from "react";
import "../../styles/dashboard/headerDashboard.css";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

function HeaderDashboard() {
  const [menuActive, setMenuActive] = useState(false);
  const { logout } = useContext(AppContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className={`header-dashboard ${menuActive ? "menu-active" : ""}`}>
      <h1>Administrador</h1>
      <span className="menu-icon" onClick={toggleMenu}>
        ☰
      </span>
      <nav>
        <ul>
          <li>
            <Button onClick={handleLogout} className="buttons">
              Cerrar Sesión
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderDashboard;
