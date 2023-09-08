import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { deleteExerciseService } from "../../service/index";
import { useExerciseList } from "../../hooks/useExerciseList";

function DeleteExercise() {
  const { user } = useContext(AppContext);
  const [exerciseId, setExerciseId] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [error, setError] = useState(null);
  const { loading: exercisesLoading } = useExerciseList(user.token);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setExerciseId(value);
  };

  const handleDeleteExercise = async () => {
    try {
      setError(null);

      const result = await deleteExerciseService(exerciseId, user.token);

      if (result.success) {
        setDeleteMessage("Ejercicio eliminado con éxito");
        setExerciseId("");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        setError("Error al eliminar el ejercicio: " + result.message);
      }
    } catch (error) {
      setError("Error al eliminar el ejercicio: " + error.message);
    }
  };

  return (
    <div>
      <h2>Eliminar Ejercicio</h2>
      <label>ID del Ejercicio a Eliminar:</label>
      <input type="text" value={exerciseId} onChange={handleInputChange} />
      <button onClick={handleDeleteExercise} disabled={exercisesLoading}>
        Eliminar Ejercicio
      </button>
      {deleteMessage && <p>{deleteMessage}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default DeleteExercise;
