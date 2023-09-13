import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

function UpdateExerciseComponent() {
  const { user } = useContext(AppContext);
  const [exerciseData, setExerciseData] = useState({
    id: "", 
    name: "",
    description: "",
    muscleGroup: "",
    photo: null,
  });
  const [message, setMessage] = useState(""); // Nuevo estado para el mensaje

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExerciseData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setExerciseData({
      ...exerciseData,
      photo: e.target.files[0],
    });
  };

  const handleUpdateExercise = async (e) => {
    e.preventDefault();

    // Verificar si el campo 'muscleGroup' está vacío
    if (!exerciseData.muscleGroup) {
      setMessage("El campo Grupo Muscular es obligatorio."); // Actualiza el mensaje
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", exerciseData.name);
      formData.append("description", exerciseData.description);
      formData.append("muscleGroup", exerciseData.muscleGroup);
      if (exerciseData.photo) {
        formData.append("photo", exerciseData.photo);
      }

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/exercises/updateExerciseController/${exerciseData.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `${user.token}`,
          },
          body: formData,
        }
      );

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message);
      }

      setMessage("Ejercicio actualizado con éxito."); // Actualiza el mensaje

      // Recarga la página
      window.location.reload();
    } catch (error) {
      setMessage("Error al actualizar el ejercicio."); // Actualiza el mensaje
      console.error("Error al actualizar el ejercicio:", error.message);
    }
  };

  return (
    <div>
      <h2>Actualizar Ejercicio</h2>
      
      {/* Muestra el mensaje */}
      {message && <p>{message}</p>}
      
      <form onSubmit={handleUpdateExercise}>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={exerciseData.id}
          onChange={handleChange}
        />
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={exerciseData.name}
          onChange={handleChange}
        />
        <label>Descripción:</label>
        <input
          type="text"
          name="description"
          value={exerciseData.description}
          onChange={handleChange}
        />
        <label>Grupo Muscular:</label>
        <select
          name="muscleGroup"
          value={exerciseData.muscleGroup}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar</option>
          <option value="Tren superior">Tren superior</option>
          <option value="Tren inferior">Tren inferior</option>
          <option value="core">Core</option>
          <option value="Full Body">Full Body</option>
        </select>
        <label>Foto:</label>
        <input
          type="file"
          name="photo"
          onChange={handleFileChange}
        />
        <button type="submit">Actualizar Ejercicio</button>
      </form>
    </div>
  );
}

export default UpdateExerciseComponent;