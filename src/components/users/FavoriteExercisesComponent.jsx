import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FavoriteExercisesService } from "../../service/index";


function FavoriteExercisesComponent() {
  const { id, userToken } = useContext(AppContext);
  const [favoriteExercises, setFavoriteExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAccordion, setShowAccordion] = useState(false);

  useEffect(() => {
    const loadFavoriteExercises = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await FavoriteExercisesService(id, userToken);

        if (result.success) {
          setFavoriteExercises(result.data);
        } else {
          throw new Error(result.message);
        }

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    loadFavoriteExercises();
  }, [id, userToken]);

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
