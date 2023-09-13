import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { updateExerciseService } from "../../service/index";

function UpdateExerciseComponent() {
  const { user } = useContext(AppContext);
  const [exerciseData, setExerciseData] = useState({
    id: "", // Agrega el campo 'id'
    name: "",
    description: "",
    muscleGroup: "",
    // Agrega aquí más campos según sea necesario
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setExerciseData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleUpdateExercise = async () => {
    try {
      // Lógica para enviar los datos actualizados del ejercicio al servidor
      const response = await updateExerciseService(user?.token, exerciseData);

      if (response.status === "ok") {
        // Actualizar el estado del ejercicio con los datos actualizados
        setExerciseData(response.data);

        alert("Ejercicio actualizado con éxito.");
      } else {
        throw new Error("No se recibieron datos válidos para el ejercicio actualizado");
      }
    } catch (error) {
      alert("Error al actualizar el ejercicio.");
      console.error("Error al actualizar el ejercicio:", error.message);
    }
  };

  return (
    <div>
      <h2>Actualizar Ejercicio</h2>
      <form>
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
        <input
          type="text"
          name="muscleGroup"
          value={exerciseData.muscleGroup}
          onChange={handleChange}
        />
        {/* Agrega aquí más campos según sea necesario */}
        <button onClick={handleUpdateExercise}>Actualizar Ejercicio</button>
      </form>
    </div>
  );
}

export default UpdateExerciseComponent;
