import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../api";
import "../styles/login.css";
import { useAuth } from "./../context/AuthContext";

function LoginComponent() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { user, setUser } = useAuth();
  const handleLogin = async () => {
    setError("");
    setIsLoading(true);

    try {
      const data = await post("http://localhost:8000/users/login", {
        email,
        password,
      });
      if (data.status === "ok") {
        if (data.userRole === "admin") {
          setUser("admin");
        } else if (data.userRole === "cliente") {
          setUser("cliente");
        }
      } else {
        setError(data.message || "Error al iniciar sesión");
      }
      console.log({ PRUEBA: data });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  if (user === "admin") {
    navigate("/adminpage");
  } else if (user === "cliente") {
    navigate("/clientpage");
  }
  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar Sesión</h2>
      <form>
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
        <button
          className="login-button"
          type="button" // Cambiar a type="button" para evitar el envío del formulario
          disabled={isLoading}
          onClick={handleLogin} // Manejar la autenticación en el evento click
        >
          <span>{isLoading ? "Cargando..." : "Iniciar Sesión"}</span>
        </button>
        {error && <p className="login-error">{error}</p>}
        {isLoading && <p className="login-loading">Cargando...</p>}
      </form>
    </div>
  );
}

export default LoginComponent;
