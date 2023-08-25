import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import LoginPage from "../src/pages/LoginPage";
import RegisterPage from "../src/pages/RegisterPage";
import AdminPage from "../src/pages/AdminPage";
import ClientPage from "../src/pages/ClientPage";

function PrivateRoute({ element, authenticated }) {
  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return element;
}

export function RoutesApp({ authenticated, setAuthenticated }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={<LoginPage setAuthenticated={setAuthenticated} />}
      />
      <Route path="/register" element={<RegisterPage />} />

      {/* Ruta genérica para usuarios autenticados */}
      <Route
        path="/*"
        element={
          <PrivateRoute
            element={
              authenticated ? (
                // Redirige al usuario según su rol
                authenticated.userRole === "admin" ? (
                  <AdminPage />
                ) : (
                  <ClientPage />
                )
              ) : (
                <Navigate to="/login" />
              )
            }
            authenticated={authenticated}
          />
        }
      />
    </Routes>
  );
}

export default RoutesApp;
