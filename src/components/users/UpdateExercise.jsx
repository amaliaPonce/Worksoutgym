import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import useExercise from "../../hooks/useExercise";
import { updateExerciseService } from "../../service/index";

function UpdateExercise() {
  const { user } = useContext(AppContext);
  const [exerciseData, setExerciseData] = useState({
    id: "",
    name: "",
    description: "",
    muscleGroup: "",
    photoName: null,
  });

  const [updateMessage, setUpdateMessage] = useState("");
  const [error, setError] = useState(null);

  const {
    exercise,
    loading: exerciseLoading,
    error: exerciseError,
  } = useExercise(exerciseData.id);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;

    setExerciseData({
      ...exerciseData,
      [name]: newValue,
    });
  };

  const handleUpdateExercise = async () => {
    try {
      setError(null);

      const formData = new FormData();
      formData.append("id", exerciseData.id);
      formData.append("name", exerciseData.name);
      formData.append("description", exerciseData.description);
      formData.append("muscleGroup", exerciseData.muscleGroup);

      if (exerciseData.photoName !== null) {
        formData.append("photoName", exerciseData.photoName);
      }

      const response = await updateExerciseService(
        exerciseData.id,
        user.token,
        formData
      );

      if (!response.ok) {
        throw new Error(
          "Error de red: " + response.status + " " + response.statusText
        );
      }

      setUpdateMessage("Ejercicio actualizado con éxito");
      setExerciseData({
        ...exerciseData,
        photoName: null,
      });
      setTimeout(() => setUpdateMessage(""), 3000);
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
      <label>Nombre:</label>
      <input
        type="text"
        name="name"
        value={exerciseData.name}
        onChange={handleInputChange}
      />
      <label>Descripción:</label>
      <input
        type="text"
        name="description"
        value={exerciseData.description}
        onChange={handleInputChange}
      />
      <label>Grupo Muscular:</label>
      <select
        name="muscleGroup"
        value={exerciseData.muscleGroup}
        onChange={handleInputChange}
      >
        <option value="">Seleccione un grupo muscular</option>
        <option value="Tren superior">Tren superior</option>
        <option value="Tren inferior">Tren inferior</option>
        <option value="core">Core</option>
        <option value="Full body">Full body</option>
      </select>
      <label>Foto:</label>
      <input
        type="file"
        name="photoName"
        accept="image/*"
        onChange={handleInputChange}
      />
      <button onClick={handleUpdateExercise}>Actualizar Ejercicio</button>
      {updateMessage && <p>{updateMessage}</p>}
      {error && <p>Error: {error}</p>}
      {exerciseLoading ? (
        <p>Cargando información del ejercicio...</p>
      ) : exerciseError ? (
        <p>Error al cargar información del ejercicio: {exerciseError}</p>
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
      ) : null}
    </div>
  );
}

export default UpdateExercise;
