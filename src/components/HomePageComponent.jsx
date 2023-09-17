import React from "react";
import { Link } from "react-router-dom";
import "../styles/homePage.css";
import FamiliaImage from "../assets/familia.png";
import { useTheme } from "../context/ThemeContext";
const HomePageComponent = () => {
  const theme = useTheme();

  return (
    <main className={`home-page ${theme}`}>
      <section className={`banner ${theme}`}>
        <section className="banner-text">
          <h1 className={`banner-title ${theme}`}>
            Transforma Tu Cuerpo y Tu Vida
          </h1>
          <h2 className={`banner-subtitle ${theme}`}>
            ¡Suda, Sonríe y Repite!
          </h2>
          <p className={`banner-description ${theme}`}>
            En nuestro gimnasio virtual, encontrarás una diversidad incomparable
            de ejercicios. Desde intensos entrenamientos de resistencia que
            desafían tus límites hasta sesiones de acondicionamiento
            cardiovascular que mejoran tu resistencia y queman calorías de
            manera efectiva.
          </p>
          <Link to="/register" className={`buttons ${theme}`}>
            Comienza Tu Viaje de Fitness
          </Link>
        </section>
        <section className={`banner-image ${theme}`}>
          <img src={FamiliaImage} alt="hero-banner" />
        </section>
      </section>
      <section className={`features ${theme}`}>
        <article className={`feature ${theme}`}>
          <i className={`uil uil-user ${theme}`}></i>
          <h3 className={`feature-title ${theme}`}>
            Entrenadores Profesionales
          </h3>
          <p className={`feature-description ${theme}`}>
            Nuestros entrenadores certificados te guiarán en tu viaje de
            fitness. Te proporcionarán orientación experta y motivación
            constante para alcanzar tus metas de acondicionamiento físico.
          </p>
        </article>
        <article className={`feature ${theme}`}>
          <i className={`uil uil-dumbbell ${theme}`}></i>
          <h3 className={`feature-title ${theme}`}>Variedad de Ejercicios</h3>
          <p className={`feature-description ${theme}`}>
            Ofrecemos una amplia gama de ejercicios para satisfacer tus
            necesidades. Desde entrenamientos de resistencia hasta clases de
            yoga relajantes, tenemos algo para todos los niveles y preferencias.
          </p>
        </article>
        <article className={`feature ${theme}`}>
          <i className={`uil uil-trophy ${theme}`}></i>
          <h3 className={`feature-title ${theme}`}>Resultados Garantizados</h3>
          <p className={`feature-description ${theme}`}>
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
