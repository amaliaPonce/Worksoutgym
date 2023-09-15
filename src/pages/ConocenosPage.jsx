import React from "react";
import "../styles/conocenos.css";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import AmaliaWeb from "../assets/Amalia.mp4";
import SusanaWeb from "../assets/Susana.mp4";

const Data = () => {
  return (
    <div className="pages">
      <HeaderComponent />
      <main className="home-content">
        <section className="person-data">
          <figure className="video-container">
            <video className="home-video profile-animate" autoPlay loop muted>
              <source src={AmaliaWeb} type="video/mp4" />
              Tu navegador no soporta videos en formato MP4.
            </video>
          </figure>
          <section className="person-info">
            <h1 className="home-title">Amalia Ponce Toledo</h1>
            <a
              href="mailto:amaliaponcetoledo@gmail.com"
              className="button button-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="#ffffff"
              >
                <path d="M23.119.882a2.966,2.966,0,0,0-2.8-.800l-16,3.370a4.995,4.995,0,0,0-2.853,8.481L3.184,13.650a1,1,0,0,1,.293.708v3.168a2.965,2.965,0,0,0,.3,1.285l-.008.007.026.026A3,3,0,0,0,5.157,20.200l.026.026.007-.008a2.965,2.965,0,0,0,1.285.300H9.643a1,1,0,0,1,.707.292l1.717,1.717A4.963,4.963,0,0,0,15.587,24a5.049,5.049,0,0,0,1.605-.264,4.933,4.933,0,0,0,3.344-3.986L23.911,3.715A2.975,2.975,0,0,0,23.119.882ZM4.6,12.238,2.881,10.521a2.94,2.94,0,0,1-.722-3.074,2.978,2.978,0,0,1,2.5-2.026L20.5,2.086,5.475,17.113V14.358A2.978,2.978,0,0,0,4.6,12.238Zm13.971,7.170a3,3,0,0,1-5.089,1.712L11.762,19.400a2.978,2.978,0,0,0-2.119-.878H6.888L21.915,3.500Z" />
              </svg>
            </a>
          </section>
          <h3 className="home-subtitle">Full Stack Developer</h3>
          <p className="home-description">
            Hi there! I'm a full-stack creative designer based in Córdoba. I'm
            passionate about art and also the world of technology. Imagining and
            creating are my favorite pastimes, and I pour all my energy into
            every project I take on.
          </p>
        </section>

        <section className="person-data">
          <figure className="video-container">
            <video className="home-video profile-animate" autoPlay loop muted>
              <source src={SusanaWeb} type="video/mp4" />
              Tu navegador no soporta videos en formato MP4.
            </video>
          </figure>
          <section className="person-info">
            <h1 className="home-title">Susana Martínez Payá</h1>
            <a href="mailto:susana@example.com" className="button button-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="#ffffff"
              >
                <path d="M23.119.882a2.966,2.966,0,0,0-2.8-.800l-16,3.370a4.995,4.995,0,0,0-2.853,8.481L3.184,13.650a1,1,0,0,1,.293.708v3.168a2.965,2.965,0,0,0,.3,1.285l-.008.007.026.026A3,3,0,0,0,5.157,20.200l.026.026.007-.008a2.965,2.965,0,0,0,1.285.300H9.643a1,1,0,0,1,.707.292l1.717,1.717A4.963,4.963,0,0,0,15.587,24a5.049,5.049,0,0,0,1.605-.264,4.933,4.933,0,0,0,3.344-3.986L23.911,3.715A2.975,2.975,0,0,0,23.119.882ZM4.6,12.238,2.881,10.521a2.94,2.94,0,0,1-.722-3.074,2.978,2.978,0,0,1,2.5-2.026L20.5,2.086,5.475,17.113V14.358A2.978,2.978,0,0,0,4.6,12.238Zm13.971,7.170a3,3,0,0,1-5.089,1.712L11.762,19.400a2.978,2.978,0,0,0-2.119-.878H6.888L21.915,3.500Z" />
              </svg>
            </a>
          </section>
          <h3 className="home-subtitle">Full Stack Developer</h3>
          <p className="home-description">
            Hi there! I'm a full stack developer based in [tu ubicación]. I have
            a passion for coding and creating innovative web applications. I'm
            dedicated to building user-friendly and efficient software
            solutions.
          </p>
        </section>
      </main>

      <FooterComponent className="footer" />
    </div>
  );
};

export default Data;
