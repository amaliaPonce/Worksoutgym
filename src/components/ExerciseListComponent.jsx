import React from "react";
import { useExerciseList } from "./../hooks/api";

const ExerciseListComponent = () => {
  const exercises = useExerciseList();

  return (
    <div>
      <h2>Lista de Ejercicios</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Grupo Muscular</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(exercises) && exercises.length > 0 ? (
            exercises.map((exercise, index) => (
              <tr key={index}>
                <td>{exercise.name}</td>
                <td>{exercise.description}</td>
                <td>{exercise.muscleGroup}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No hay ejercicios disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExerciseListComponent;
