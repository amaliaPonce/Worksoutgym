import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";

// Exportar FavoriteExercise como una función normal
export const FavoriteExercise = async (idExercise, isFavorite, user) => {
  try {
    const headers = {
      Authorization: ` ${user.token}`,
    };

    const response = await fetch(
      `http://localhost:8000/exercises/favoriteExercise/?idExercise=${idExercise}`, // URL absoluta
      {
        method: isFavorite ? "POST" : "POST",
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
        `http://localhost:8000/exercises/favoriteExercise/?idExercise=${exercise.id}`, // URL absoluta
      );
      if (response.ok) {
        const data = await response.json();
        setIsFavorite(data.isFavorite);
      }
    };
    checkIfFavorite();
  }, [exercise.id]);

  const handleToggleFavorite = async () => {
    // Llamar a FavoriteExercise como una función normal
    const result = await FavoriteExercise(exercise.id, isFavorite, user);
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
