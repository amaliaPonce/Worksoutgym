import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

function UpdateExercise() {
  const { user } = useContext(AppContext);
  const [exerciseData, setExerciseData] = useState({
    id: "",
    name: "",
    description: "",
    muscleGroup: "",
    photoName: null, // Inicializar con null en lugar de una cadena vacía
  });

  const [updateMessage, setUpdateMessage] = useState("");
  const [error, setError] = useState(null);

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
      const headers = {
        Authorization: user.token,
      };

      const formData = new FormData();
      formData.append("id", exerciseData.id);
      formData.append("name", exerciseData.name);
      formData.append("description", exerciseData.description);
      formData.append("muscleGroup", exerciseData.muscleGroup);

      // Verificar si exerciseData.photoName es distinto de null antes de incluirlo
      if (exerciseData.photoName !== null) {
        formData.append("photoName", exerciseData.photoName);
      }

      const response = await fetch(
        `http://localhost:8000/exercises/updateExerciseController/${exerciseData.id}`,
        {
          method: "PUT",
          headers: headers,
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(
          "Error de red: " + response.status + " " + response.statusText
        );
      }

      setUpdateMessage("Ejercicio actualizado con éxito");
      setExerciseData({
        ...exerciseData,
        photoName: null, // Reiniciar el campo photoName
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
        <option value="Tren-superior">Tren superior</option>
        <option value="Tren-inferior">Tren inferior</option>
        <option value="core">Core</option>
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
    </div>
  );
}

export default UpdateExercise;
