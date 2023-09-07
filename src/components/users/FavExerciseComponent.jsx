import React from "react";

const ExerciseFavoriteToggle = ({ idExercise, isFavorite, markFavorite }) => {
  const toggleFavorite = async () => {
    const result = await markFavorite(idExercise, !isFavorite);
    if (result.success) {
      // Manejar aquí la lógica después de marcar o desmarcar como favorito
    } else {
      // Manejar aquí la lógica si ocurre un error
    }
  };

  return (
    <div>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
      </button>
    </div>
  );
};

export default ExerciseFavoriteToggle;
