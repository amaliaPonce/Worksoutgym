import React from "react";
import HomePageComponent from "../components/HomePageComponent";
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"

function HomePage() {
  return (
    <div>
      <HeaderComponent />
      <HomePageComponent/>
      <FooterComponent />
    </div>
  );
}

export default HomePage;

// si crearamos más componentes que quisieramos mostrar en la página (menu de navegación, imagenes efectos) debemos añadirlos aquí.
