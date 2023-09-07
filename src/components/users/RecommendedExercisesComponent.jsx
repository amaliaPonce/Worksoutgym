import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";

function RecommendedExercisesComponent() {
  const { user } = useContext(AppContext);
  const [recommendedExercises, setRecommendedExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendedExercises = async () => {
      setLoading(true);
      setError(null);

      try {
        const headers = {
          Authorization: user.token,
        };

        const response = await fetch(
          "http://localhost:8000/exercises/recommended",
          {
            method: "GET",
            headers: headers,
          }
        );

        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("No autorizado: Debes iniciar sesión.");
          } else if (response.status === 404) {
            throw new Error("Ejercicios recomendados no encontrados.");
          } else {
            throw new Error(
              "Error de red: " + response.status + " " + response.statusText
            );
          }
        }

        const data = await response.json();
        setRecommendedExercises(data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchRecommendedExercises();
  }, [user.token]);

  return (
    <div>
      <h2>Ejercicios Recomendados</h2>
      <div className="exercise-container">
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : recommendedExercises.length > 0 ? (
          recommendedExercises.map((exercise) => (
            <div key={exercise.id}>
              <p>Nombre: {exercise.name}</p>
              <p>Descripción: {exercise.description}</p>
           
            </div>
          ))
        ) : (
          <p>No hay ejercicios recomendados disponibles</p>
        )}
      </div>
    </div>
  );
}

export default RecommendedExercisesComponent;
