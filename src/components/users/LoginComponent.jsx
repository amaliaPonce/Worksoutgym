import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { loginService } from "../../service/index";
import Button from "../Button";
import "../../styles/login.css";

function LoginComponent() {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    if (event) {
      event.preventDefault();
    }

    setError("");
    setIsLoading(true);

    if (!email || !password) {
      setError("Por favor, ingresa tu correo y contraseña.");
      setIsLoading(false);
      return;
    }

    try {
      const data = await loginService({ email, password });

      console.log("Respuesta del servicio:", data);

      if (data.status === "ok") {
        login({
          role: data.data.userRole,
          token: data.data.token,
          id: data.data.id,
        });
        navigate("/usersPage");
      } else if (data.status === "error") {
        if (data.message === "La contraseña o el email no son correctos.") {
          setError(
            "Credenciales incorrectas. Por favor, verifica tu correo y contraseña."
          );
        } else {
          setError(data.message || "Error al iniciar sesión");
        }
      }
    } catch (error) {
      console.error("Error en el manejo de la solicitud:", error);

      if (error.message.includes("Network Error")) {
        setError(
          "Error de conexión. Por favor, verifica tu conexión a Internet."
        );
      } else if (error.message.includes("403 Forbidden")) {
        setError(
          "Credenciales incorrectas. Por favor, verifica tu correo y contraseña."
        );
      } else {
        setError(
          "Ha ocurrido un error al iniciar sesión. Por favor, inténtalo de nuevo más tarde."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="login-container">
      <h2 className="login-title">Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <fieldset>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            id="email"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            className="register-input"
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="register-input"
          />
        </fieldset>
        <Button
          handleClick={handleLogin}
          type="submit"
          className={`buttons`}
          disabled={isLoading}
        >
          <span>{isLoading ? "Cargando..." : "Iniciar Sesión"}</span>
        </Button>
        {error && <p className={`login-error `}>{error}</p>}
        {isLoading && <p className={`login-loading `}>Cargando...</p>}
      </form>
    </section>
  );
}

export default LoginComponent;
