import React, { useState } from "react";

import { Link } from "react-router-dom";
import "../styles/header.css";
import "../index.css";
import logo from "../assets/logo.png";

function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <img src={logo} alt="Logo" />
        </Link>
        <div className={menuOpen ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link to="/login" className="nav__link">
                <i className="uil uil-user nav__icon"></i>Iniciar Sesión
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/register" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>Registrarse
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <i className="uil uil-estate nav__icon"></i>Inicio
              </Link>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={toggleMenu}></i>
        </div>
        <div className="nav__toggle" onClick={toggleMenu}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;
