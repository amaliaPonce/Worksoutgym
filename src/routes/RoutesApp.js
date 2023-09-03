import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AdminPage from "../pages/AdminPage";
import ClientPage from "../pages/ClientPage";
import ConocenosPage from "../pages/ConocenosPage";
import FooterComponent from "../components/FooterComponent"; 
import HeaderComponent from "../components/HeaderComponent"; 


import { AuthProvider } from "../context/AuthContext";
import { UserProvider } from "../context/UserContext";

const RoutesApp = () => {
  return (
    <UserProvider>
       <HeaderComponent />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/clientpage" element={<ClientPage />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/conocenos" element={<ConocenosPage />} />
        </Routes>
        
      </AuthProvider>
      <FooterComponent />
    </UserProvider>
  );
};

export default RoutesApp;
