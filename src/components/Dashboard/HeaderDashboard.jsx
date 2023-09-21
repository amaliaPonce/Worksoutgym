import React, { useState, useContext, useEffect } from "react";
import "../../styles/dashboard/headerDashboard.css";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Button from "../Button";

function HeaderDashboard() {
  const { user } = useContext(AppContext);
  const [menuActive, setMenuActive] = useState(false);
  const { logout } = useContext(AppContext);
  const navigate = useNavigate();
  const { userInfo, loading, error } = useUser(user.id, user.token);
  const [userData, setUserData] = useState(userInfo[0]);
  useEffect(() => {
    if (userInfo && userInfo.length > 0) {
      setUserData(userInfo[0]);
    }
  }, [userInfo]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className={`header-dashboard ${menuActive ? "menu-active" : ""}`}>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : userInfo ? (
        <h1>Bienvenido - {userData.name}</h1>
      ) : null}
      <span className="menu-icon" onClick={toggleMenu}>
        ☰
      </span>
      <nav>
        <ul>
          <li>
            <Button handleClick={handleLogout} className="buttons">
              Cerrar Sesión
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderDashboard;
