import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminPage from "./pages/AdminPage";
import ClientPage from "./pages/ClientPage";
import MainContent from "./components/adminDashboard/MainContent";
import ExercisePage from "./pages/Dashboard/ExercisePage";
import AddExerciseComponent from "./components/users/AddExerciseComponent";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/clientpage" element={<ClientPage />} />
      <Route path="/adminpage" element={<AdminPage />} />
      <Route
        path="/main"
        element={<MainContent />}
      >
        <Route index element={<ExercisePage />} />
        <Route path="add-exercise" element={<AddExerciseComponent />} />
      </Route>
    </Routes>
  );
};

export default RoutesApp;
