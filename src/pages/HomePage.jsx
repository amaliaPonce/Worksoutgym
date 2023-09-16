import React from "react";
import HomePageComponent from "../components/HomePageComponent";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import { useTheme } from "../context/ThemeContext";

function HomePage() {
  const theme = useTheme();

  return (
    <div className={`pages ${theme}`}>
      <header className="header">
        <HeaderComponent />
      </header>
      <main className="main-content">
        <HomePageComponent />
      </main>
      <footer className="footer">
        <FooterComponent />
      </footer>
    </div>
  );
}

export default HomePage;
