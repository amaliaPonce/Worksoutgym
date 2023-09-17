import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerService } from "../../service/index";
import Button from "../Button";
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
      await registerService(name, email, password);
      setRegistrationSuccess(true);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className={`register-container `}>
      <h2 className="register-title">Regístrate</h2>
      {registrationSuccess && (
        <p className="register-subtitle">
          ¡Registro exitoso! Por favor, inicia sesión.
        </p>
      )}
      {error && <p className="register-error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <section>
          <label>Nombre:</label>
          <input
            className={`register-input `}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </section>
        <section>
          <label>Email:</label>
          <input
            className={`register-input `}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <section>
          <label>Contraseña:</label>
          <input
            className={`register-input `}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <Button handleClick={handleSubmit} type="submit" className={`buttons `}>
          Registrarse
        </Button>
      </form>
    </section>
  );
}

export default RegisterComponent;
