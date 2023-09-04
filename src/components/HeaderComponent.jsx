import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function HeaderComponent() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/login">Iniciar Sesión</Link>
          </li>
          <li>
            <Link to="/register">Registrarse</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default HeaderComponent;
