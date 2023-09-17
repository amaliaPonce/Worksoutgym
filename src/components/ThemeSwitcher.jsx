import { useContext } from "react";
import Button from "./Button";
import "../index.css";
import { ThemeContext } from "../context/ThemeContext";
import { theme2, theme3, theme4 } from "../components/Themes";

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <section>
      <Button
        className={`theme-button ${theme === theme2 ? "active" : ""}`}
        handleClick={() => changeTheme(theme2)}
      >
        🌊
      </Button>
      <Button
        className={`theme-button ${theme === theme3 ? "active" : ""}`}
        handleClick={() => changeTheme(theme3)}
      >
        🌵
      </Button>
      <Button
        className={`theme-button ${theme === theme4 ? "active" : ""}`}
        handleClick={() => changeTheme(theme4)}
      >
        🌸
      </Button>
    </section>
  );
};

export default ThemeSwitcher;
