import React from "react";
import { useTheme, useSetTheme } from "../../context/ThemeContext";
import Button from "../Button";
import "../../index.css";
const ThemeSwitcher = () => {
  const theme = useTheme();
  const setTheme = useSetTheme();

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <section className="theme-switcher">
      <Button
        className={`theme-button ${theme === "theme2" ? "active" : ""}`}
        handleClick={() => handleThemeChange("theme2")}
      >
        🌊
      </Button>
      <Button
        className={`theme-button ${theme === "theme3" ? "active" : ""}`}
        handleClick={() => handleThemeChange("theme3")}
      >
        🌵
      </Button>
      <Button
        className={`theme-button ${theme === "theme4" ? "active" : ""}`}
        handleClick={() => handleThemeChange("theme4")}
      >
        🌸
      </Button>
    </section>
  );
};

export default ThemeSwitcher;
