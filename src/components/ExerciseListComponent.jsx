import React, { useEffect, useState } from "react";

function ExerciseListComponent() {
  const [exercises, setExercises] = useState([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch("/exercises/getExercisess");
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
      <button onClick={() => setShowList(!showList)}>
        {showList ? "Ocultar Lista" : "Mostrar Lista"}
      </button>
      {showList && (
        <ul>
          {exercises.map((exercise) => (
            <li key={exercise.id}>
              <h3>{exercise.name}</h3>
              <p>{exercise.description}</p>
              <p>Grupo Muscular: {exercise.muscleGroup}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExerciseListComponent;
