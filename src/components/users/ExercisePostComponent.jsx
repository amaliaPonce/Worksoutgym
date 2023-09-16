import React, { useContext, useState } from "react";
import "../../styles/exerciseList.css";
import { AppContext } from "../../context/AppContext";
import { markFavoriteService } from "../../service/index";
import { MarkRecommendedService } from "../../service/index";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { useTheme } from "../../context/ThemeContext";

const ExercisePostComponent = ({ exercise, isFavorite, isRecommended }) => {
  const { user } = useContext(AppContext);
  const [exerciseIsFavorite, setExerciseIsFavorite] = useState(isFavorite);
  const [exerciseIsRecommended, setExerciseIsRecommended] =
    useState(isRecommended);
  const navigate = useNavigate();
  const theme = useTheme();

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
    <section className={`exercise-card ${theme}`}>
      {" "}
      {/* Aplica el tema al contenedor principal */}
      <section className="exercise-image">
        <img
          src={`${process.env.REACT_APP_BACKEND}/uploads/${exercise.photoName}`}
          alt={exercise.name}
        />
      </section>
      <section className="exercise-details">
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
        <Button
          handleClick={handleToggleFavorite}
          className={`buttons ${theme}`}
        >
          {exerciseIsFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
        </Button>
        <Button
          handleClick={handleToggleRecommendation}
          className={`buttons ${theme}`}
        >
          {exerciseIsRecommended
            ? "Desmarcar como recomendado"
            : "Marcar como recomendado"}
        </Button>
        <Button
          handleClick={() => navigate(`/usersPage/exercises/${exercise.id}`)}
          className={`buttons ${theme}`}
        >
          Ver detalles
        </Button>
      </section>
    </section>
  );
};

export default ExercisePostComponent;
