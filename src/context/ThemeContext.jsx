import { useState, createContext, useEffect, useMemo } from "react";
import { theme2, theme3, theme4 } from "../components/Themes";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(null);

  const themes = useMemo(() => [null, theme2, theme3, theme4], []);

  const changeTheme = () => {
    setTheme((prevTheme) => {
      const currentIndex = themes.indexOf(prevTheme);
      const nextIndex = (currentIndex + 1) % themes.length;
      return themes[nextIndex];
    });
  };

  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem("theme"));
    if (storedTheme && themes.includes(storedTheme)) {
      setTheme(storedTheme);
    } else {
      setTheme(null);
    }
  }, [themes]);
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
