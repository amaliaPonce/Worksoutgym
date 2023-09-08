import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerService } from "../../service/index";

import "../../styles/register.css";

function RegisterComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerService({ email, password });
      setRegistrationSuccess(true);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Regístrate</h2>
      {registrationSuccess && (
        <p className="register-subtitle">
          ¡Registro exitoso! Por favor, inicia sesión.
        </p>
      )}
      {error && <p className="register-error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            className="register-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            className="register-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            className="register-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="register-button">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default RegisterComponent;
