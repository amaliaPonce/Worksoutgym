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
import UpdateExercise from "./components/users/UpdateExercise";
import InfoExerciseComponet from "./components/users/InfoExerciseComponent";
import ExerciseListComponent from "./components/users/ExerciseListComponent";

// Si queremos que las rutas se abran en una pagina nueva tienen que estar fuera del padre.

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/clientpage" element={<ClientPage />} />
      <Route path="/adminpage" element={<AdminPage />} />
      <Route
        path="/ruta-a-exercise-info/:id"
        element={<InfoExerciseComponet />}
      />

      <Route path="/main" element={<MainContent />}>
        <Route path="/main/exercisePage" element={<ExercisePage />}></Route>

        <Route
          path="/main/exercisePage/AddExerciseComponent"
          element={<AddExerciseComponent />}
        />
        <Route
          path="/main/exercisePage/UpdateExercise"
          element={<UpdateExercise />}
        />
        <Route
          path="/main/exercisePage/InfoExerciseComponent"
          element={<InfoExerciseComponet />}
        />
        <Route
          path="/main/exercisePage/ExerciseListComponen"
          element={<ExerciseListComponent />}
        />
      </Route>
    </Routes>
  );
};

export default RoutesApp;
