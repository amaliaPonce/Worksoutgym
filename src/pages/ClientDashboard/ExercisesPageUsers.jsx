import React from "react";
import { Link, Outlet } from "react-router-dom";
import UserLayout from "../../components/userDashboard/UserLayout";

function ExercisesPageUsers() {
  return (
    <UserLayout>
      <div className="exercise-page-container">
        <nav>
          <ul>
            <li>
              <Link to="/clientpage/exercisesPageUsers/ExerciseListComponent">
                <p>Lista de Ejercicios</p>
              </Link>
              <Link to="/clientpage/exercisesPageUsers/FilterExercisesComponent">
                <p>Filtrar</p>
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Outlet />
      </div>
    </UserLayout>
  );
}

export default ExercisesPageUsers;
