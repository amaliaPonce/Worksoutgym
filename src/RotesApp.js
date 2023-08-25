import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import LoginPage from "../src/pages/LoginPage";
import RegisterPage from "../src/pages/RegisterPage";
import AdminPage from "../src/pages/AdminPage";
import ClientPage from "../src/pages/ClientPage";

export function RoutesApp({ authenticated, setAuthenticated }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={
          <LoginPage
            setAuthenticated={setAuthenticated}
            authenticated={authenticated}
          />
        }
      />
      <Route path="/register" element={<RegisterPage />} />

      {/* Ruta genérica para usuarios autenticados */}
      <Route
        path="/dashboard"
        element={
          authenticated ? (
            authenticated.userRole === "admin" ? (
              <AdminPage />
            ) : (
              <ClientPage />
            )
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Nuevas rutas para redireccionar a AdminPage y ClientPage */}
      <Route path="/adminpage" element={<AdminPage />} />
      <Route path="/clientpage" element={<ClientPage />} />
    </Routes>
  );
}
export default RoutesApp;
