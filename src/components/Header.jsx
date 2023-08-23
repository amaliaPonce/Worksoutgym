import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <h1>Gimnasio App</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/login">Iniciar Sesión</Link></li>
          <li><Link to="/register">Registrarse</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
