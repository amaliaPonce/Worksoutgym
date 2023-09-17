import { useState, useContext, createContext } from "react";
import { theme2, theme3, theme4 } from "../components/Themes";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  const changeTheme = (newTheme) => {
    switch (newTheme) {
      case "theme2":
        setTheme(theme2);
        break;
      case "theme3":
        setTheme(theme3);
        break;
      case "theme4":
        setTheme(theme4);
        break;
      default:
        setTheme("");
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe utilizarse dentro de un ThemeProvider");
  }
  return context.theme;
};

export const useSetTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useSetTheme debe utilizarse dentro de un ThemeProvider");
  }
  return context.changeTheme;
};
