import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "../styles/footer.css";

function FooterComponent() {
  const theme = useTheme();

  return (
    <footer className={`footer ${theme}`}>
      <section className="footer-content">
        <section className="footer-section">
          <p>
            Hecho con <span className="heart-icon">❤</span> por Amalia Ponce y
            Susana Martínez
          </p>
        </section>
        <section className="footer-section">
          <p>
            <Link className={`conocenos-link ${theme}`} to="/aboutUs">
              Conócenos
            </Link>
          </p>
        </section>
        <section className="footer-section">
          <p>JSB21RT HACK A BOOS 2023</p>
        </section>
      </section>
    </footer>
  );
}

export default FooterComponent;
