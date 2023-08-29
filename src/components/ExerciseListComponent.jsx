import React, { useEffect, useState } from "react";
import { postExercise } from "./../hooks/ExercisesFetch";

function ExerciseListComponent() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("/exercises")
      .then((response) => response.json())
      .then((data) => {
        setExercises(data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de ejercicios", error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Ejercicios</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <h3>{exercise.name}</h3>
            <p>{exercise.description}</p>
            <p>Grupo Muscular: {exercise.muscleGroup}</p>
          </li>
        ))}
      </ul>
      <button onClick={postExercise}>Publicar Ejercicio</button>
    </div>
  );
}

export default ExerciseListComponent;
