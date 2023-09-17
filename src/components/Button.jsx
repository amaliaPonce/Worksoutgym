import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

const Button = ({ handleClick, children }) => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    if (handleClick) {
      handleClick();
    }
    setIsActive(!isActive);
  };

  const buttonClassName = `buttons ${theme} ${isActive ? "active" : ""}`;

  return (
    <button onClick={handleButtonClick} className={buttonClassName}>
      {children}
    </button>
  );
};

export default Button;

// pendiente actualizar todos los botones <button handleButtonClick = {nombre del boton de cada componente} className={buttonClassName}>
