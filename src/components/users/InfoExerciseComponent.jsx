import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useExercise } from "../hooks/useExercise";
import { AppContext } from "../../context/AppContext";

function ExerciseInfo() {
  const { user } = useContext(AppContext);
  const { id } = useParams();
  const { exercise, loading, error } = useExercise(id, user.token);

  return (
    <div>
      {loading ? (
        <p>Cargando información del ejercicio...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : exercise ? (
        <div>
          <h2>Detalles del Ejercicio</h2>
          <p>
            <strong>ID:</strong> {exercise.id}
          </p>
          <p>
            <strong>Nombre:</strong> {exercise.name}
          </p>
          <p>
            <strong>Descripción:</strong> {exercise.description}
          </p>
          <p>
            <strong>Grupo Muscular:</strong> {exercise.muscleGroup}
          </p>
        </div>
      ) : (
        <p>No se pudo cargar la información del ejercicio.</p>
      )}
    </div>
  );
}

export default ExerciseInfo;
