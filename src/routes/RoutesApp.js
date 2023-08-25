import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AdminPage from "../pages/AdminPage";
import ClientPage from "../pages/ClientPage";
import ProtectedRoute from "./ProtectedRoute";

function RoutesApp({ authenticated, setAuthenticated }) {
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
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute authenticated={authenticated} redirectTo="/login">
            <DashboardRoutes authenticated={authenticated} />
          </ProtectedRoute>
        }
      />

      <Route path="/clientpage" element={<ClientPage />} />
      <Route path="/adminpage" element={<AdminPage />} />
    </Routes>
  );
}

// Un componente separado para manejar las rutas del dashboard
function DashboardRoutes({ authenticated }) {
  return authenticated.userRole === "admin" ? <AdminPage /> : <ClientPage />;
}

export default RoutesApp;
