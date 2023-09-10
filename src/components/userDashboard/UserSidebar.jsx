import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "../../styles/adminDashboard/sidebar.css";

const UserSidebar = () => {
  return (
    <aside className="aside">
      <NavLink to="/clientpage/exercisesPageUsers" className="nav-logo">
        <img src={Logo} alt="" />
      </NavLink>
      
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/clientpage/exercisesPageUsers" className="nav-link">
              <i className="uil uil-dumbbell"></i> Ejercicios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/clientpage/Profile" className="nav-link">
              <i className="uil uil-user"></i> Perfil
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="nav-footer">
        <span className="copyright">&copy; 2023 </span>
      </div>
    </aside>
  );
};

export default UserSidebar;
