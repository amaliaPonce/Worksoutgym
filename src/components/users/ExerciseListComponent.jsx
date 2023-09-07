import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useExerciseList } from "../../hooks/useExerciseListFecth";

function ExerciseListComponent() {
  const { user } = useContext(AppContext);
  const exercises = useExerciseList(user.token);

  return (
    <div>
      <h2>Lista de Ejercicios</h2>

      <div className="exercise-container">
        {exercises.map((exercise) => (
          <div key={exercise.id}>
            <h3>{exercise.name}</h3>
            <p>Descripción: {exercise.description}</p>
            <p>Grupo Muscular: {exercise.muscleGroup}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExerciseListComponent;
