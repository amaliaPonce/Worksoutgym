import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Button = ({ handleClick, children }) => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    if (handleClick) {
      handleClick();
    }
    setIsActive(!isActive);
    changeTheme();
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`buttons ${theme || "default"} ${isActive ? "active" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
