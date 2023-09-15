import React from "react";
import "../styles/conocenos.css";
import FamiliaImage from "../assets/familia.png";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const Data = () => {
  return (
    <>
    <HeaderComponent />
    <div className="home-content">
      <div className="person-data">
        <h1 className="home-title">
          Amalia Divina Ponce 
        </h1>
        <h3 className="home-subtitle">Full Stack Developer</h3>
        <p className="home-description">
          Hi there! I'm a full-stack creative designer based in Córdoba. I'm passionate about art and also the world of technology. Imagining and creating are my favorite pastimes, and I pour all my energy into every project I take on.
        </p>

        <img className="home-img" src={FamiliaImage} alt="Familia" />

        <a href="mailto:amaliaponcetoledo@gmail.com" className="button button-flex">          <span>Send Mail</span>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#ffffff">
  <path d="M23.119.882a2.966,2.966,0,0,0-2.8-.8l-16,3.37a4.995,4.995,0,0,0-2.853,8.481L3.184,13.65a1,1,0,0,1,.293.708v3.168a2.965,2.965,0,0,0,.3,1.285l-.008.007.026.026A3,3,0,0,0,5.157,20.2l.026.026.007-.008a2.965,2.965,0,0,0,1.285.3H9.643a1,1,0,0,1,.707.292l1.717,1.717A4.963,4.963,0,0,0,15.587,24a5.049,5.049,0,0,0,1.605-.264,4.933,4.933,0,0,0,3.344-3.986L23.911,3.715A2.975,2.975,0,0,0,23.119.882ZM4.6,12.238,2.881,10.521a2.94,2.94,0,0,1-.722-3.074,2.978,2.978,0,0,1,2.5-2.026L20.5,2.086,5.475,17.113V14.358A2.978,2.978,0,0,0,4.6,12.238Zm13.971,7.17a3,3,0,0,1-5.089,1.712L11.762,19.4a2.978,2.978,0,0,0-2.119-.878H6.888L21.915,3.5Z"/>
</svg>

        </a>
      </div>

      <div className="person-data">
        <h1 className="home-title">
          Susana Martínez Payá 
        </h1>
        <h3 className="home-subtitle">Full Stack Developer</h3>
        <p className="home-description">
          Hi there! I'm a full stack developer based in [tu ubicación]. I have a passion for coding and creating innovative web applications. I'm dedicated to building user-friendly and efficient software solutions.
        </p>

        <img className="home-img" src={FamiliaImage} alt="Familia" />

        <a href="mailto:susana@example.com" className="button button-flex">
          <span>Send Mail</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#ffffff">
  <path d="M23.119.882a2.966,2.966,0,0,0-2.8-.8l-16,3.37a4.995,4.995,0,0,0-2.853,8.481L3.184,13.65a1,1,0,0,1,.293.708v3.168a2.965,2.965,0,0,0,.3,1.285l-.008.007.026.026A3,3,0,0,0,5.157,20.2l.026.026.007-.008a2.965,2.965,0,0,0,1.285.3H9.643a1,1,0,0,1,.707.292l1.717,1.717A4.963,4.963,0,0,0,15.587,24a5.049,5.049,0,0,0,1.605-.264,4.933,4.933,0,0,0,3.344-3.986L23.911,3.715A2.975,2.975,0,0,0,23.119.882ZM4.6,12.238,2.881,10.521a2.94,2.94,0,0,1-.722-3.074,2.978,2.978,0,0,1,2.5-2.026L20.5,2.086,5.475,17.113V14.358A2.978,2.978,0,0,0,4.6,12.238Zm13.971,7.17a3,3,0,0,1-5.089,1.712L11.762,19.4a2.978,2.978,0,0,0-2.119-.878H6.888L21.915,3.5Z"/>
</svg>
        </a>

      </div>

    </div>
    <div>
    <FooterComponent className="footer" />
    </div>

    </>
  );
};

export default Data;
