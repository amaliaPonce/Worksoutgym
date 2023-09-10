import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import FavoriteExercises from "../../service/index";
import Button from "../Button";

function FavoriteExercisesComponent() {
  const { user } = useContext(AppContext);
  const [favoriteExercises, setFavoriteExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAccordion, setShowAccordion] = useState(false);

  useEffect(() => {
    const loadFavoriteExercises = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await FavoriteExercises(user.token);

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
          <Button handleClick={() => setShowAccordion(!showAccordion)}>
            {showAccordion ? "Ocultar Favoritos" : "Mostrar Favoritos"}
          </Button>
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
