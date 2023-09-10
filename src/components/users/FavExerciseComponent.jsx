import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { markFavoriteService } from "../../service/index";

const ExerciseFavoriteComponent = ({ exercise }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useContext(AppContext);

  useEffect(() => {
    const checkIfFavorite = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND}/exercises/favoriteExercise/?idExercise=${exercise.id}`
        );
        if (response.ok) {
          const data = await response.json();
          setIsFavorite(data.isFavorite);
        }
      } catch (error) {
        console.error("Error al obtener el estado de favorito:", error.message);
      }
    };

    checkIfFavorite();
  }, [exercise.id]);

  const handleToggleFavorite = async () => {
    try {
      const result = await markFavoriteService(exercise.id, !isFavorite, user);

      if (result.success) {
        setIsFavorite(!isFavorite);
        console.log(result.message);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error("Error al marcar/desmarcar como favorito:", error.message);
    }
  };

  return (
    <div>
      <button onClick={handleToggleFavorite}>
        {isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
      </button>
    </div>
  );
};

export default ExerciseFavoriteComponent;
