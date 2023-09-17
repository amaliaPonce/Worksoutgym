import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Button = ({ handleClick, children }) => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    if (handleClick) {
      handleClick();
    }
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`buttons ${theme} ${isActive ? "active" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
