import React, { useState, useEffect } from "react";
import "../../styles/exerciseList.css";

function ExerciseListComponent() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjkzNzM1ODY2LCJleHAiOjE2OTQzNDA2NjZ9.fD6ZvI_OtDIhFhsiWuazrUSMIltPl5fa_GGSAomipsw";
    const headers = {
      Authorization: `${accessToken}`,
    };

    fetch("http://localhost:8000/exercises/listExercises", {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setExercises(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Ejercicios</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : exercises.length > 0 ? (
        <ul>
          {exercises.map((exercise) => (
            <li key={exercise.id}>
              <div className="exercise-info">
                <div className="exercise-image">
                  <img
                    src={`http://localhost:8000/uploads/${exercise.photoName}`}
                    alt={exercise.name}
                  />
                </div>
                <div className="exercise-details">
                  <strong>Nombre:</strong> {exercise.name}
                  <br />
                  <strong>Descripción:</strong> {exercise.description}
                  <br />
                  <strong>Grupo Muscular:</strong> {exercise.muscleGroup}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay ejercicios disponibles</p>
      )}
    </div>
  );
}

export default ExerciseListComponent;