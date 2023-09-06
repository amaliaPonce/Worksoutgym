import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";

function FavoriteExercisesComponent() {
  const { user } = useContext(AppContext);
  const [favoriteExercises, setFavoriteExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAccordion, setShowAccordion] = useState(false);

  useEffect(() => {
    const fetchFavoriteExercises = async () => {
      setLoading(true);
      setError(null);

      try {
        const headers = {
          Authorization: user.token,
        };

        const response = await fetch("http://localhost:8000/exercises/favorite", {
          method: "GET",
          headers: headers,
        });

        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("No autorizado: Debes iniciar sesión.");
          } else if (response.status === 404) {
            throw new Error("Ejercicios favoritos no encontrados.");
          } else {
            throw new Error(
              "Error de red: " + response.status + " " + response.statusText
            );
          }
        }

        const data = await response.json();
        setFavoriteExercises(data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    // Llamar a fetchFavoriteExercises inicialmente
    fetchFavoriteExercises();

    // Comenta o elimina el código relacionado con el intervalo y setInterval

  }, [user.token]);

  return (
    <div>
      <h2>Ejercicios Favoritos</h2>

      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          <button onClick={() => setShowAccordion(!showAccordion)}>
            {showAccordion ? "Ocultar Favoritos" : "Mostrar Favoritos"}
          </button>
          {showAccordion && (
            <div>
              {favoriteExercises.length > 0 ? (
                <ul>
                  {favoriteExercises.map((exercise) => (
                    <li key={exercise.id}>
                      <h3>{exercise.name}</h3>
                      <p>{exercise.description}</p>
                      <p>Grupo Muscular: {exercise.muscleGroup}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No tienes ejercicios favoritos.</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FavoriteExercisesComponent;
