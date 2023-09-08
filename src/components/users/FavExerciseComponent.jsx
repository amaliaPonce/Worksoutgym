import React from "react";

const ExerciseFavoriteComponent = ({
  idExercise,
  isFavorite,
  markFavorite,
}) => {
  const toggleFavorite = async () => {
    const result = await markFavorite(idExercise, !isFavorite);
    if (result.success) {
    } else {
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

export default ExerciseFavoriteComponent;
