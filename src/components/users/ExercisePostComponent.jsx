import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/exerciseList.css";
import { AppContext } from "../../context/AppContext";
import { FavoriteExercise } from "./FavExerciseComponent";

const ExercisePostComponent = ({ exercise, isFavorite }) => {
  const { user } = useContext(AppContext);
  const [exerciseIsFavorite, setExerciseIsFavorite] = useState(isFavorite);

  const handleToggleFavorite = async () => {
    const result = await FavoriteExercise(exercise.id, exerciseIsFavorite, user);
    if (result.success) {
      setExerciseIsFavorite(!exerciseIsFavorite);
      console.log(result.message);
    } else {
      console.error(result.message);
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
        {/* Botón de "Favorito" */}
        <button onClick={handleToggleFavorite}>
          {exerciseIsFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
        </button>
      </div>
      <div className="exercise-arrow">
        {/* Usar Link para redirigir al detalle del ejercicio en el backend */}
        <Link to={`/main/exercise-info/${exercise.id}`}>
  <i className="bx bx-arrow-to-right"></i>
</Link>

      </div>
    </div>
  );
};

export default ExercisePostComponent;
