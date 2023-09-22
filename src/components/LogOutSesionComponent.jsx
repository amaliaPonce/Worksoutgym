import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

function LogOutSession() {
  const { logout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/homePage");
  };

  return (
    <section className="logout-session">
      <Button handleClick={handleLogout} className={`buttons`}>
        Cerrar Sesión
      </Button>
    </section>
  );
}

export default LogOutSession;
