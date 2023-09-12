import React, { useContext, useState } from "react";
import "../../styles/exerciseList.css";
import { AppContext } from "../../context/AppContext";
import { markFavoriteService } from "../../service/index";
import { MarkRecommendedService } from "../../service/index";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

const ExercisePostComponent = ({ exercise, isFavorite, isRecommended }) => {
  const { user } = useContext(AppContext);
  const [exerciseIsFavorite, setExerciseIsFavorite] = useState(isFavorite);
  const [exerciseIsRecommended, setExerciseIsRecommended] =
    useState(isRecommended);
  const navigate = useNavigate();

  const handleToggleFavorite = async () => {
    try {
      const result = await markFavoriteService(
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
    } catch (error) {
      console.error("Error al marcar/desmarcar como favorito:", error.message);
    }
  };

  const handleToggleRecommendation = async () => {
    try {
      const result = await MarkRecommendedService(
        exercise.id,
        exerciseIsRecommended,
        user
      );
      if (result.success) {
        setExerciseIsRecommended(!exerciseIsRecommended);
        console.log(result.message);
      } else {
        console.error(result.message);
      }
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
          src={`${process.env.REACT_APP_BACKEND}/uploads/${exercise.photoName}`}
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
        <Button handleClick={handleToggleFavorite}>
          {exerciseIsFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
        </Button>
        <Button handleClick={handleToggleRecommendation}>
          {exerciseIsRecommended
            ? "Desmarcar como recomendado"
            : "Marcar como recomendado"}
        </Button>
        <Button
          handleClick={() => navigate(`/ruta-a-exercise-info/${exercise.id}`)}
        >
          Ver detalles
        </Button>
      </div>
    </div>
  );
};

export default ExercisePostComponent;
