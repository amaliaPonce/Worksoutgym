// RecommendedExercisesComponent.js
import React, { useState, useEffect } from "react";

function RecommendedExercisesComponent() {
  const [recommendedExercises, setRecommendedExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Realizar la solicitud GET a la API para obtener ejercicios recomendados
    fetch("http://localhost:8000/exercises/RecommendedExercise/") // Cambia la URL si es necesario
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error de red: " + response.status + " " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setRecommendedExercises(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Ejercicios Recomendados</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : recommendedExercises.length > 0 ? (
        <div className="exercise-container">
          {recommendedExercises.map((exercise) => (
            <div key={exercise.id}>
              <h3>{exercise.name}</h3>
              <p>Descripción: {exercise.description}</p>
              <p>Grupo Muscular: {exercise.muscleGroup}</p>
              {/* Mostrar más detalles si es necesario */}
            </div>
          ))}
        </div>
      ) : (
        <p>No hay ejercicios recomendados disponibles</p>
      )}
    </div>
  );
}

export default RecommendedExercisesComponent;
