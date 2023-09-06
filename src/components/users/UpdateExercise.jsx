import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

function UpdateExercise() {
  const { user } = useContext(AppContext);
  const [exerciseData, setExerciseData] = useState({
    id: "",
    name: "", // Eliminamos el campo "Nombre de la Foto"
    description: "",
    muscleGroup: "", // Cambiamos el campo "muscleGroup" a un desplegable
  });

  const [updateMessage, setUpdateMessage] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExerciseData({
      ...exerciseData,
      [name]: value,
    });
  };

  const handleUpdateExercise = async () => {
    try {
      setError(null);
      const headers = {
        Authorization: user.token,
        "Content-Type": "application/json",
      };

      const response = await fetch(
        `http://localhost:8000/exercises/updateExerciseController/${exerciseData.id}`,
        {
          method: "PUT",
          headers: headers,
          body: JSON.stringify(exerciseData),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Error de red: " + response.status + " " + response.statusText
        );
      }

      setUpdateMessage("Ejercicio actualizado con éxito");
      setExerciseData({
        id: "",
        name: "", // Eliminamos el campo "Nombre de la Foto"
        description: "",
        muscleGroup: "", // Restablecemos el campo "muscleGroup"
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Actualizar Ejercicio</h2>
      <label>ID del Ejercicio:</label>
      <input
        type="text"
        name="id"
        value={exerciseData.id}
        onChange={handleInputChange}
      />
      {/* Eliminamos el campo "Nombre de la Foto" */}
      <label>Descripción:</label>
      <input
        type="text"
        name="description"
        value={exerciseData.description}
        onChange={handleInputChange}
      />
      {/* Cambiamos el campo "muscleGroup" a un desplegable */}
      <label>Grupo Muscular:</label>
      <select
        name="muscleGroup"
        value={exerciseData.muscleGroup}
        onChange={handleInputChange}
      >
        <option value="">Seleccione un grupo muscular</option>
        <option value="Tren-superior">Tren superior</option>
        <option value="Tren-inferior">Tren inferior</option>
        <option value="core">Core</option>
      </select>
      <button onClick={handleUpdateExercise}>Actualizar Ejercicio</button>
      {updateMessage && <p>{updateMessage}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default UpdateExercise;
