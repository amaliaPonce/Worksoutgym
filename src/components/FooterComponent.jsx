import React from "react";
import { Link } from "react-router-dom";

import "../styles/footer.css";

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>
            Hecho con <span className="heart-icon">❤</span> por Amalia Ponce y Susana Martínez
          </p>
        </div>
        <div className="footer-section">
          <p>
          <Link className="conocenos-link" to="/aboutUs">
  Conócenos
</Link>
          </p>
        </div>
        <div className="footer-section">
          <p>JSB21RT HACK A BOOS 2023</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
