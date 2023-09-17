import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginServise } from "../../service/index";
import "../../styles/login.css";
import { AppContext } from "../../context/AppContext";
import Button from "../Button";
import { useTheme } from "../../context/ThemeContext";

function LoginComponent() {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const theme = useTheme();

  const handleLogin = async (event) => {
    if (event) {
      event.preventDefault();
    }

    setError("");
    setIsLoading(true);

    try {
      const data = await loginServise({ email, password });

      if (data.status === "ok") {
        login({
          role: data.data.userRole,
          token: data.data.token,
          id: data.data.id,
        });
        navigate("/usersPage");
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
    <section className={`login-container ${theme}`}>
      <h2 className={`login-title ${theme}`}>Iniciar Sesión</h2>
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
        <Button
          handleClick={handleLogin}
          type="submit"
          className={`buttons ${theme}`}
          disabled={isLoading}
        >
          <span>{isLoading ? "Cargando..." : "Iniciar Sesión"}</span>
        </Button>
        {error && <p className={`login-error ${theme}`}>{error}</p>}
        {isLoading && <p className={`login-loading ${theme}`}>Cargando...</p>}
      </form>
    </section>
  );
}

export default LoginComponent;
