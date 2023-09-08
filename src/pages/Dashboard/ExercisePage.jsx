import React from "react";
import { Link } from "react-router-dom";
import ExerciseListComponent from "../../components/users/ExerciseListComponent";
import "../../styles/adminDashboard/exercisePage.css";

function ExercisePage() {
  return (
    <div className="exercise-page-container">
      <nav>
        <ul>
          <li>
            <Link to="add-exercise">Añadir ejercicio</Link>
          </li>
          <li>
            <Link to="update-exercise">Editar ejercicio</Link>
          </li>
          <li>
            <Link to="delete-exercise">Eliminar ejercicio</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <ExerciseListComponent />
    </div>
  );
}

export default ExercisePage;
