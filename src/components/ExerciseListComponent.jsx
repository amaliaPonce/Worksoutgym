import React, { useEffect, useState } from "react";

function ExerciseListComponent() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch("/exercises/infoExercises");
        if (!response.ok) {
          throw new Error(
            `Error en la solicitud: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        setExercises(data);
      } catch (error) {
        console.error("Error al obtener la lista de ejercicios", error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <div>
      <h2>Lista de Ejercicios</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.data}>
            <h3>{exercise.name}</h3>
            <p>{exercise.description}</p>
            <p>Grupo Muscular: {exercise.muscleGroup}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseListComponent;
