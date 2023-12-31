import React from "react";
import { Link } from "react-router-dom";
import FamiliaImage from "../assets/familia.png";
import "../styles/homePage.css";

const HomePageComponent = () => {
  return (
    <main className="home-page">
      <section className="banner">
        <section className="banner-text">
          <h1 className="banner-title">Transforma Tu Cuerpo y Tu Vida</h1>
          <h2 className="banner-subtitle">¡Suda, Sonríe y Repite!</h2>
          <p className="banner-description">
            En nuestro gimnasio virtual, encontrarás una diversidad incomparable
            de ejercicios. Desde intensos entrenamientos de resistencia que
            desafían tus límites hasta sesiones de acondicionamiento
            cardiovascular que mejoran tu resistencia y queman calorías de
            manera efectiva.
          </p>
          <Link to="/register" className={`buttons `}>
            Comienza Tu Viaje de Fitness
          </Link>
        </section>
        <section className="banner-image">
          <img src={FamiliaImage} alt="hero-banner" />
        </section>
      </section>
      <section className="features">
        <article className="feature">
          <i className="uil uil-user"></i>
          <h3 className="feature-title">Entrenadores Profesionales</h3>
          <p className="feature-description">
            Nuestros entrenadores certificados te guiarán en tu viaje de
            fitness. Te proporcionarán orientación experta y motivación
            constante para alcanzar tus metas de acondicionamiento físico.
          </p>
        </article>
        <article className="feature">
          <i className="uil uil-dumbbell"></i>
          <h3 className="feature-title">Variedad de Ejercicios</h3>
          <p className="feature-description">
            Ofrecemos una amplia gama de ejercicios para satisfacer tus
            necesidades. Desde entrenamientos de resistencia hasta clases de
            yoga relajantes, tenemos algo para todos los niveles y preferencias.
          </p>
        </article>
        <article className="feature">
          <i className="uil uil-trophy"></i>
          <h3 className="feature-title">Resultados Garantizados</h3>
          <p className="feature-description">
            Nuestra comunidad ha logrado resultados impresionantes. ¡Únete a
            nosotros! Aquí, no solo te ayudaremos a alcanzar tus objetivos de
            fitness, sino que también te convertirás en una parte valiosa de
            nuestra comunidad de logros.
          </p>
        </article>
      </section>
    </main>
  );
};

export default HomePageComponent;
