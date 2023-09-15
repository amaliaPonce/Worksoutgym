import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ExercisesPage from "./pages/ExercisesPage";
import InfoExercisePage from "./pages/InfoExercisePage";
import InfoUserPage from "./pages/InfoUserPage";
import ConocenosPage from "./pages/ConocenosPage"
import ListUserPage from "./pages/ListUserPage";
import UsersPage from "./pages/UsersPage";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/aboutUs" element={<ConocenosPage />} />
        
      <Route path="/usersPage" element={<UsersPage />} />
      <Route path="/usersPage/exercises" element={<ExercisesPage />} />
      <Route path="/usersPage/exercises/:id" element={<InfoExercisePage />} />
      <Route path="/usersPage/infoUser" element={<InfoUserPage />} />
      <Route path="/usersPage/listUsers" element={<ListUserPage />} />

    </Routes>
  );
};

export default RoutesApp;
