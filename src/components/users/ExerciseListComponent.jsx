import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useExerciseList } from "../../hooks/useExerciseListFecth";
import ExercisePostComponent from "./ExercisePostComponent";

function ExerciseListComponent() {
  const { user } = useContext(AppContext);
  const exercises = useExerciseList(user.token);

  return (
    <div>
      <h2>Lista de Ejercicios</h2>

      <div className="exercise-container">
        {exercises.map((exercise) => (
          <ExercisePostComponent key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}

export default ExerciseListComponent;
