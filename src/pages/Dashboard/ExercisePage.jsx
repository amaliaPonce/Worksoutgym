import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/adminDashboard/exercisePage.css";

function ExercisePage() {
  return (
    <div className="exercise-page-container">
      <nav>
        <ul>
          <li>
            <Link to="/main/exercisePage/AddExerciseComponent">
              <p>Añadir ejercicio</p>
            </Link>
          </li>
          <li>
            <Link to="/main/exercisePage/UpdateExercise">
              <p>Editar ejercicio</p>
            </Link>
          </li>
          <li>
            <Link to="/main/exercisePage/InfoExerciseComponent">
              <p>Información del ejercicio</p>
            </Link>
          </li>
          <li>
            <Link to="/main/exercisePage/ExerciseListComponent">
              <p>Lista de los ejercicio</p>
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default ExercisePage;
