import React from "react";
import Button from "./Button";
import "../index.css";
import { useTheme, useSetTheme } from "../context/ThemeContext";
import { theme2, theme3, theme4 } from "../components/Themes";

const ThemeSwitcher = () => {
  const theme = useTheme();
  const setTheme = useSetTheme();

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const clearActiveClass = () => {
    const buttons = document.querySelectorAll(".theme-button");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
  };

  return (
    <section className="theme-switcher">
      <Button
        className={`theme2-button ${theme === theme2 ? "active" : ""}`}
        handleClick={() => {
          clearActiveClass();
          handleThemeChange(theme2);
        }}
      >
        🌊
      </Button>
      <Button
        className={`theme3-button ${theme === theme3 ? "active" : ""}`}
        handleClick={() => {
          clearActiveClass();
          handleThemeChange(theme3);
        }}
      >
        🌵
      </Button>
      <Button
        className={`theme4-button ${theme === theme4 ? "active" : ""}`}
        handleClick={() => {
          clearActiveClass();
          handleThemeChange(theme4);
        }}
      >
        🌸
      </Button>
    </section>
  );
};

export default ThemeSwitcher;
