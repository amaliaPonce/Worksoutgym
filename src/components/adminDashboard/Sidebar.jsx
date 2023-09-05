import "../../styles/sidebar.css"
import React, { useState } from "react";



function Sidebar() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <aside className={`sidebar ${isVisible ? "" : "hidden"}`}>
      <ul>
        <li>
          <a href="#">
          <i class='bx bx-dumbbell'></i>
            <span>Ejercicios</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-user"></i> {/* Icono de usuarios */}
            <span>Usuarios</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-cog"></i> 
            <span>Administración</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
