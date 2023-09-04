import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../api";
import "../styles/login.css";
import { AppContext } from "../context/AppContext";

function LoginComponent() {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  // const [userRole, setUserRole] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const data = await post("http://localhost:8000/users/login", {
        email,
        password,
      });
      //console.log(data);

      if (data.status === "ok") {
        //setUserRole(data.data.userRole);
        login({ role: data.data.userRole, token: data.data.token });
        if (data.data.userRole === "admin") {
          navigate("/adminpage");
        } else if (data.data.userRole === "cliente") {
          navigate("/clientpage");
        }
        //console.log(data.data.userRole);
      } else {
        setError(data.message || "Error al iniciar sesión");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          className={`login-input ${error && "error"}`}
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
        />
        <input
          className={`login-input ${error && "error"}`}
          type="password"
          placeholder="Contraseña"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <button type="submit" className="login-button" disabled={isLoading}>
          <span>{isLoading ? "Cargando..." : "Iniciar Sesión"}</span>
        </button>
        {error && <p className="login-error">{error}</p>}
        {isLoading && <p className="login-loading">Cargando...</p>}
      </form>
    </div>
  );
}

export default LoginComponent;
