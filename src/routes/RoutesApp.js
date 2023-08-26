import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AdminPage from "../pages/AdminPage";
import ClientPage from "../pages/ClientPage";
import { AuthProvider } from "../context/AuthContext";

const RoutesApp = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/clientpage" element={<ClientPage />} />
        <Route path="/adminpage" element={<AdminPage />} />
      </Routes>
    </AuthProvider>
  );
};

export default RoutesApp;
