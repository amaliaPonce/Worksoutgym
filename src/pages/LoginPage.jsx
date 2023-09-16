import React from "react";
import { Link } from "react-router-dom";
import LoginComponent from "../components/users/LoginComponent";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import { useTheme } from "../context/ThemeContext";

import "../styles/login.css";

function LoginPage() {
  const theme = useTheme();

  return (
    <div className={`pages ${theme}`}>
      <HeaderComponent />
      <main className="login-page">
        <section className="login-container">
          <h2 className="login-title">Hola deportista,</h2>
          <p className="login-subtitle">¡Bienvenido de vuelta!</p>
          <LoginComponent />
          <p className="login-signup">
            ¿Nuevo aquí? <Link to="/register">Regístrate</Link>
          </p>
        </section>
      </main>
      <FooterComponent />
    </div>
  );
}

export default LoginPage;
