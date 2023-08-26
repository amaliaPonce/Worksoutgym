import React from "react";
import RoutesApp from "./../src/routes/RoutesApp";
import { BrowserRouter } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </div>
  );
}

export default Navigation;
