import React from "react";
import { Link } from "react-router-dom"; 
import LoginComponent from "../components/LoginComponent";

import "../styles/login.css";

function LoginPage() {
  return (
    <div className="login-page">
    
      <div className="login-container">
        <h2 className="login-title">Hola deportista,</h2>
        <p className="login-subtitle">¡Bienvenido de vuelta!</p>
        <LoginComponent />
        <p className="login-signup">
          ¿Nuevo aquí? <Link to="/register">Regístrate</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
