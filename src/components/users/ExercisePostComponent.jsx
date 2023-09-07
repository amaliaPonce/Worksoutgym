import React, { useContext, useState } from "react";
import "../../styles/exerciseList.css";
import { AppContext } from "../../context/AppContext";
import { FavoriteExercise } from "./FavExerciseComponent";

const ExercisePostComponent = ({ exercise, isFavorite }) => {
  const { user } = useContext(AppContext);
  const [exerciseIsFavorite, setExerciseIsFavorite] = useState(isFavorite);

  const handleToggleFavorite = async () => {
    const result = await FavoriteExercise(
      exercise.id,
      exerciseIsFavorite,
      user
    );
    if (result.success) {
      setExerciseIsFavorite(!exerciseIsFavorite);
      console.log(result.message);
    } else {
      console.error(result.message);
    }
  };

  const handleDeleteExercise = async () => {
    try {
    } catch (error) {
      console.error("Error al eliminar el ejercicio:", error.message);
    }
  };

  const handleToggleRecommendation = async () => {
    try {
    } catch (error) {
      console.error(
        "Error al marcar/desmarcar como recomendado:",
        error.message
      );
    }
  };

  return (
    <div className="exercise-card">
      <div className="exercise-image">
        <img
          src={`http://localhost:8000/uploads/${exercise.photoName}`}
          alt={exercise.name}
        />
      </div>

      <div className="exercise-details">
        <p className="exercise-title">
          <strong>ID:</strong> {exercise.id}
        </p>
        <p className="exercise-title">
          <strong>Nombre:</strong> {exercise.name}
        </p>
        <p className="exercise-details">
          <strong>Descripción:</strong> {exercise.description}
        </p>
        <p className="exercise-details">
          <strong>Grupo Muscular:</strong> {exercise.muscleGroup}
        </p>
        <button onClick={handleToggleFavorite}>
          {exerciseIsFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
        </button>

        <button onClick={handleDeleteExercise}>Eliminar Ejercicio</button>

        <button onClick={handleToggleRecommendation}>
          {exercise.isRecommended
            ? "Desmarcar como recomendado"
            : "Marcar como recomendado"}
        </button>
      </div>
    </div>
  );
};

export default ExercisePostComponent;
