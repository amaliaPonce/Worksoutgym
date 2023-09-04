import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminPage from "./pages/AdminPage";
import ClientPage from "./pages/ClientPage";
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"

const RoutesApp = () => {
  return (
    <div>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/clientpage" element={<ClientPage />} />
        <Route path="/adminpage" element={<AdminPage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
};

export default RoutesApp;
