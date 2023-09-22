import React from "react";
import HomePageComponent from "../components/HomePageComponent";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

function HomePage() {
  return (
    <main>
      <HeaderComponent />
      <HomePageComponent />
      <FooterComponent />
    </main>
  );
}

export default HomePage;
