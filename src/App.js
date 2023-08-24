import React, { useState } from "react";
import { BrowserRouter as Router, Route, Navigate,
Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import  AdminComponent  from "./components/AdminComponent";
import ClientComponent from "./components/ClientComponent";

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
    <div className="Routes">
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
              element={<ClientComponent />} // Usa tu componente para el dashboard de clientes
              authenticated={authenticated}
            />
          }
        />
        <Route
        // aqui falta tener los datos del admin por token
          path="/admin"
          element={
            <PrivateRoute
              element={<AdminComponent />} 
              authenticated={authenticated}
              roles={["admin"]} 
              fallback={<Navigate to="/unauthorized" />} 
            />
          }
        />
      </Routes>
    </div>
  </Router>
  
  );
}

export default App;
