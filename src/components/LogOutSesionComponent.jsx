import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { useTheme } from "../../context/ThemeContext";

function LogOutSession() {
  const { logout } = useContext(AppContext);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleLogout = () => {
    logout();
    navigate("/homePage");
  };

  return (
    <div className={`logout-session ${theme}`}>
      <Button handleClick={handleLogout} className={`buttons ${theme}`}>
        Cerrar Sesión
      </Button>
    </div>
  );
}

export default LogOutSession;
