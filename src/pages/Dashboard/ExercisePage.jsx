import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ExerciseListComponent from "../../components/users/ExerciseListComponent";
import AddExercise from "../../components/users/AddExerciseComponent";
import UpdateExercise from "../../components/users/UpdateExercise";
import "../../styles/adminDashboard/exercisePage.css";

function ExercisePage() {
  return (
    <Router>
      <div className="exercise-page-container">
        <Link to="/list">Lista de ejercicios</Link>
        <Link to="/add">Añadir ejercicio</Link>
        <Link to="/update">Editar ejercicio</Link>
      </div>
      <Routes>
        <Route path="/list" element={<ExerciseListComponent />} />
        <Route path="/add" element={<AddExercise />} />
        <Route path="/update" element={<UpdateExercise />} />
      </Routes>
    </Router>
  );
}

export default ExercisePage;
