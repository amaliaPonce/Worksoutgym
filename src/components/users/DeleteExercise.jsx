import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

function DeleteExercise() {
  const { user } = useContext(AppContext);
  const [exerciseId, setExerciseId] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setExerciseId(value);
  };

  const handleDeleteExercise = async () => {
    try {
      setError(null);
      const headers = {
        Authorization: user.token,
      };

      const response = await fetch(
        `http://localhost:8000/exercises/deleteExercise/${exerciseId}`,
        {
          method: "DELETE",
          headers: headers,
        }
      );

      if (!response.ok) {
        throw new Error(
          "Error de red: " + response.status + " " + response.statusText
        );
      }

      setDeleteMessage("Ejercicio eliminado con éxito");
      setExerciseId(""); // Limpiamos el campo de ID

      // Recargar la página después de un breve retraso
      setTimeout(() => {
        window.location.reload();
      }, 1000); // 1000 milisegundos (1 segundo)
    } catch (error) {
      setError("Error al eliminar el ejercicio: " + error.message);
    }
  };

  return (
    <div>
      <h2>Eliminar Ejercicio</h2>
      <label>ID del Ejercicio a Eliminar:</label>
      <input
        type="text"
        value={exerciseId}
        onChange={handleInputChange}
      />
      <button onClick={handleDeleteExercise}>Eliminar Ejercicio</button>
      {deleteMessage && <p>{deleteMessage}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default DeleteExercise;
