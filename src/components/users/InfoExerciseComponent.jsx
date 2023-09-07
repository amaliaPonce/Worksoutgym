import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

function ExerciseInfoPage() {
  const { user } = useContext(AppContext);
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExerciseInfo = async () => {
      setLoading(true);
      setError(null);

      try {
        const headers = {
          Authorization: user.token,
        };

        const response = await fetch(
          `http://localhost:8000/exercises/infoExercise/${id}`,
          {
            method: "GET",
            headers: headers,
          }
        );

        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("No autorizado: Debes iniciar sesión.");
          } else if (response.status === 404) {
            throw new Error("Ejercicio no encontrado.");
          } else {
            throw new Error(
              "Error de red: " + response.status + " " + response.statusText
            );
          }
        }

        const data = await response.json();
        setExercise(data.data[0]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchExerciseInfo();
  }, [user.token, id]);

  return (
    <div>
      {loading ? (
        <p>Cargando información del ejercicio...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : exercise ? (
        <div>
          <h2>Detalles del Ejercicio</h2>
          <p>
            <strong>ID:</strong> {exercise.id}
          </p>
          <p>
            <strong>Nombre:</strong> {exercise.name}
          </p>
          <p>
            <strong>Descripción:</strong> {exercise.description}
          </p>
          <p>
            <strong>Grupo Muscular:</strong> {exercise.muscleGroup}
          </p>
        </div>
      ) : (
        <p>No se pudo cargar la información del ejercicio.</p>
      )}
    </div>
  );
}

export default ExerciseInfoPage;
