import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { markFavoriteService } from "../../service/index";
import { MarkRecommendedService } from "../../service/index";
import { useNavigate } from "react-router-dom";
import "../../styles/dashboard/exercisePage.css";

const ExercisePostComponent = ({ exercise, isFavorite, isRecommended }) => {
  const { user } = useContext(AppContext);

  // Estado para controlar si el ejercicio es favorito y recomendado.
  const [exerciseIsFavorite, setExerciseIsFavorite] = useState(isFavorite);
  const [exerciseIsRecommended, setExerciseIsRecommended] =
    useState(isRecommended);

  const navigate = useNavigate();

  // Marcar o desmarcar favorito.
  const handleToggleFavorite = async (e) => {
    e.stopPropagation();
    try {
      const result = await markFavoriteService(
        exercise.id,
        !exerciseIsFavorite,
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

  // Marcar o desmarcar recomendado.
  const handleToggleRecommendation = async (e) => {
    e.stopPropagation();
    try {
      const result = await MarkRecommendedService(
        exercise.id,
        !exerciseIsRecommended,
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

  // Navegación a la página del ejercicio clickado.
  const redirectToDetailsPage = () => {
    navigate(`/usersPage/exercises/${exercise.id}`);
  };

  return (
    <article className="exercise-card" onClick={redirectToDetailsPage}>
      <p className="exercise-id">{exercise.id}</p>
      <section className="exercise-image-container">
        <figure className="exercise-image-overlay">
          <img
            src={`${process.env.REACT_APP_BACKEND}/uploads/${exercise.photoName}`}
            alt={exercise.name}
          />
        </figure>
      </section>

      <section className="exercise-details">
        <p className="exercise-title">
          <strong>Nombre:</strong> {exercise.name}
        </p>
        <p className="exercise-description">
          <strong>Descripción:</strong> {exercise.description}
        </p>
        <p className="exercise-muscle-group">
          <strong>Grupo Muscular:</strong> {exercise.muscleGroup}
        </p>
        <div className="button-container">
          <button className="heart-button" onClick={handleToggleFavorite}>
            <input type="checkbox" checked={exerciseIsFavorite} readOnly />
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
              xmlSpace="preserve"
              className="exercise-button-icon thumbs-up-regular"
            >
              <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path>
            </svg>
          </button>
          <button
            className="recommended-button"
            onClick={handleToggleRecommendation}
          >
            <input type="checkbox" checked={exerciseIsRecommended} readOnly />
            <svg
              viewBox="0 0 512 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="exercise-button-icon thumbs-up-regular"
            >
              <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"></path>
            </svg>
          </button>
        </div>
      </section>
    </article>
  );
};

export default ExercisePostComponent;
