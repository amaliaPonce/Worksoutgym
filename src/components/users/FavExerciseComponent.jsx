import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const FavoriteExercise = async (idExercise, isFavorite, user) => {
  try {
    const headers = {
      Authorization: ` ${user.token}`,
    };

    const response = await fetch(
      `/api/exercises/favoriteExercises/${idExercise}`,
      {
        method: isFavorite ? "DELETE" : "POST",
        headers,
      }
    );

    if (response.ok) {
      const message = isFavorite
        ? "Ejercicio eliminado de favoritos"
        : "Ejercicio añadido a favoritos";
      return { success: true, message };
    } else {
      return { success: false, message: "Error al realizar la acción" };
    }
  } catch (error) {
    return { success: false, message: "Error de red" };
  }
};

function ExerciseItem({ exercise }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useContext(AppContext);

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
    const result = await FavoriteExercise(exercise.id, isFavorite, user.token);
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
