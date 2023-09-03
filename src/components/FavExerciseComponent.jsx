import React, { useState, useEffect } from "react";
import { FavoriteExercise } from "../hooks/api";

function ExerciseItem({ exercise }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkIfFavorite = async () => {
      const response = await fetch(
        `/exercises/favoriteExercises/${exercise.id}`
      );
      if (response.ok) {
        const data = await response.json();
        setIsFavorite(data.isFavorite);
      }
    };
    checkIfFavorite();
  }, [exercise.id]);
  const handleToggleFavorite = async () => {
    const result = await FavoriteExercise(exercise.id, isFavorite);
    if (result.success) {
      setIsFavorite(!isFavorite);
      console.log(result.message);
    } else {
      console.error(result.message);
    }
  };
  return (
    <div>
      <h3>{exercise.name}</h3>
      <p>{exercise.description}</p>
      <button onClick={handleToggleFavorite}>
        {isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
      </button>
    </div>
  );
}
export default ExerciseItem;
