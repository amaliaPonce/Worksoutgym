import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/register.css";


function RegisterComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (response.ok) {
        // Registro exitoso, muestra mensaje y redirige a la página de inicio de sesión
        setRegistrationSuccess(true);
        navigate("/login");
      } else {
        console.error("Error en el registro");
      }
    } catch (error) {
      console.error("Error en el registro", error);
    }
  };
  return (
    <div className="register-container">
      <h2 className="register-title">Regístrate</h2>
      {registrationSuccess && (
        <p className="register-subtitle">¡Registro exitoso! Por favor, inicia sesión.</p>
      )}
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
        <button type="submit" className="register-button">Registrarse</button>
      </form>
     
    </div>
  );
}

export default RegisterComponent;
