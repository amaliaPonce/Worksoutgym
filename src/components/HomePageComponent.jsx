import React from 'react';
import '../styles/homePage.css'; 
import FamiliaImage from '../assets/familia.png';

const HomePageComponent = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <h4 className="banner-title">Únete a nuestro Fitness Club</h4>
        <h2 className="banner-subtitle">¡Suda, Sonríe y Repite!</h2>
        <p className="banner-description">
          Descubre las mejores rutinas de ejercicios personalizadas para ti.
        </p>
        <a
          className="banner-button"
          href="#exercises"
        >
          Explora los Ejercicios
        </a>
      </div>
      <div className="banner-image">
        <img src={FamiliaImage} alt="hero-banner" />
      </div>
    </div>
  );
};

export default HomePageComponent;
