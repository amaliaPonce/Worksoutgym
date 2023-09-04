import React from "react";
import { Link } from "react-router-dom";
import RegisterComponent from "../components/RegisterComponent";
import "../styles/login.css";

function RegisterPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">¡Únete a nuestra comunidad fitness!</h2>
        <p className="login-subtitle">Comienza tu entrenamiento</p>
        <RegisterComponent />
        <p className="login-signup">
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
