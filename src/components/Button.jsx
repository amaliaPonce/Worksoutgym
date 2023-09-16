import { useTheme } from "../context/ThemeContext";

const Button = ({ handleClick, children }) => {
  const theme = useTheme();
  return (
    <button onClick={handleClick} className={`buttons ${theme}`}>
      {children}
    </button>
  );
};

export default Button;
