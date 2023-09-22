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

  //  Envío del formulario de registro.
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Validar los campos del formulario antes de enviar la solicitud
      if (!name || !email || !password) {
        setError("Por favor, completa todos los campos.");
        return;
      }
  
      await registerService(name, email, password);
  
      // Restablecer los campos del formulario
      setName("");
      setEmail("");
      setPassword("");
      setError("");
      
      setRegistrationSuccess(true);
      navigate("/login");
    } catch (error) {
      setError("Error al registrar. Por favor, verifica tus datos e inténtalo de nuevo.");
    }
  };
  


  return (
    <section className="register-container">
      <h2 className="register-title">Regístrate</h2>
      {registrationSuccess && (
        <p className="register-subtitle">
          ¡Registro exitoso! Por favor, inicia sesión.
        </p>
      )}
      {error && <p className="register-error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Información de Registro</legend>
          <section className="register-input-section">
            <label htmlFor="name">Nombre:</label>
            <input
              id="name"
              className="register-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </section>
          <section className="register-input-section">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              className="register-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>
          <section className="register-input-section">
            <label htmlFor="password">Contraseña:</label>
            <input
              id="password"
              className="register-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </section>
        </fieldset>
        <Button
          handleClick={handleSubmit}
          type="submit"
          className={`buttons`}
        >
          Registrarse
        </Button>
      </form>
    </section>
  );
}

export default RegisterComponent;
