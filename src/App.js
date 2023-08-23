import React, { useState } from "react";
import { BrowserRouter as Router, Route, Navigate,
Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function PrivateRoute({ element, authenticated }) {
  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return element;
}

function App() {
  const [authenticated, setAuthenticated] = useState(true);
  
  // esto tiene que estar en true para que Dashboard sea una ruta privada

  return (
    <Router>
      <div className="Rotes" >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setAuthenticated={setAuthenticated} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute
              element={<Dashboard />}
                authenticated={authenticated}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
