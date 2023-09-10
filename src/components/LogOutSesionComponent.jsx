import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

function LogOutSesion() {
  const { logout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/homePage");
  };

  return (
    <div>
      <Button handleClick={handleLogout}>Cerrar Sesión</Button>
    </div>
  );
}

export default LogOutSesion;
