import React, { useEffect, useState } from "react";

function ExerciseList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // Aquí realizamos una solicitud GET a la API para obtener la lista de ejercicios.
    fetch("/exercises/infoExercises")
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
            {/* Agrega más información del ejercicio si es necesario */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseList;
