import React, { useState, useEffect } from "react";
import ExercisePost from "./ExercisePostComponent";

function ExerciseListComponent() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Tu token de autenticación (reemplázalo con tu token real)
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjkzNzM3NTY4LCJleHAiOjE2OTQzNDIzNjh9.5vivRksfeqMRkMQwihd2Xf-JLMDpcL_IRQQMytExVJE";

    // Configura los encabezados de la solicitud con el token de autenticación
    const headers = {
      Authorization: ` ${accessToken}`,
    };

    // Realiza la solicitud a la API con los encabezados
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
              <ExercisePost exercise={exercise} />
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
