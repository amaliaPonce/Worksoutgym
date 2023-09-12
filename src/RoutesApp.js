import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import AdminPage from "./pages/AdminPage";
import ClientPage from "./pages/ClientPage";

import ExercisesPage from "./pages/ExercisesPage"

import InfoExercisePage from "./pages/InfoExercisePage"

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
     
      <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/adminpage/exercises" element={<ExercisesPage />} />
        <Route
        path="/adminpage/exercises/:id"
        element={<InfoExercisePage />}
      />



      <Route path="/clientpage" element={<ClientPage />} />
      

    </Routes>
  );
};

export default RoutesApp;
