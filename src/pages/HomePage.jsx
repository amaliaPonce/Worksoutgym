import React from "react";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import HomePageComponent from "../components/HomePageComponent";

function HomePage() {
  return (
    <div>
      <h1>🏋️‍♂️ WorksOutGym 🏋️‍♂️ </h1>
      <HeaderComponent />
      <HomePageComponent/>
      <FooterComponent />
    </div>
  );
}

export default HomePage;

// si crearamos más componentes que quisieramos mostrar en la página (menu de navegación, imagenes efectos) debemos añadirlos aquí.
