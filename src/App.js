import React from "react";
import RotesApp from "../src/routes/RoutesApp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RotesApp />
    </BrowserRouter>
  );
}

export default App;
