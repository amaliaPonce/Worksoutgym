import React from "react";
import { useTheme, useSetTheme } from "../../context/ThemeContext";
import Button from "../Button";

const ThemeSwitcher = () => {
  const theme = useTheme();
  const setTheme = useSetTheme();

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="theme-switcher">
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
    </div>
  );
};

export default ThemeSwitcher;
