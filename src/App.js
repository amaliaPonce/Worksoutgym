import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RoutesApp } from "./RotesApp";

function App() {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <Router>
      <div className="Routes">
        <RoutesApp
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </div>
    </Router>
  );
}

export default App;
