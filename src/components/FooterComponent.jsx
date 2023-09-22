import React from "react";
import "../styles/footer.css";

function FooterComponent() {
  return (
    <footer className="footer">
      <section className="footer-content">
        <section className="footer-section">
          <p>
            Hecho con <span className="heart-icon">❤</span> por Amalia Ponce y
            Susana Martínez
          </p>
        </section>
        <section className="footer-section">
          <p>
            <a className="conocenos-link" href="/aboutUs" target="_blank">
              Conócenos
            </a>
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
