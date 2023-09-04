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
        <li><a href="#">Ejercicios</a></li>
        <li><a href="#">Usuarios</a></li>
        <li><a href="#">Administración</a></li>
      </ul>
      <button onClick={toggleVisibility}>Toggle Sidebar</button>
    </aside>
  );
}

export default Sidebar;
