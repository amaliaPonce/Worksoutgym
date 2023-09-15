import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfileUserPage from "./pages/ProfileUserPage";
import AdminPage from "./pages/AdminPage";
import ClientPage from "./pages/ClientPage";

import ExercisesPage from "./pages/ExercisesPage";

import InfoExercisePage from "./pages/InfoExercisePage";

import InfoUserPage from "./pages/InfoUserPage";
import ConocenosPage from "./pages/ConocenosPage"
const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/aboutUs" element={<ConocenosPage />} />

      <Route path="/adminpage" element={<AdminPage />} />
      <Route path="/adminpage/exercises" element={<ExercisesPage />} />
      <Route path="/adminpage/exercises/:id" element={<InfoExercisePage />} />
      <Route path="/adminpage/profileUserPage" element={<ProfileUserPage />} />
      <Route path="/adminpage/profileUserPage/ProfileDetails/:id" element={<InfoUserPage />} />

      <Route path="/clientpage" element={<ClientPage />} />
      
    </Routes>
  );
};

export default RoutesApp;
