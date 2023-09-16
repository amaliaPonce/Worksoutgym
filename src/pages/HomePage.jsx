import React from "react";
import HomePageComponent from "../components/HomePageComponent";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

function HomePage() {
  return (
    <div className="pages">
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
