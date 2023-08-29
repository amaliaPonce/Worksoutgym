import React, { useState } from "react";
import { postExercise } from "../hooks/AddExercisesFetch";

function AddExercise() {
  const [ejercicio, setEjercicio] = useState({
    name: "",
    description: "",
    muscleGroup: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEjercicio({
      ...ejercicio,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postExercise(ejercicio); // Usa la función importada para enviar la solicitud
      if (response.status === 201) {
        // Verifica si la respuesta tiene el estado correcto
        console.log("Ejercicio agregado exitosamente");
      } else {
        // Manejar errores, por ejemplo, mostrar un mensaje de error
        console.error("Error al agregar el ejercicio");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };
  return (
    <div>
      <h2>Agregar Ejercicio de Gimnasio</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={ejercicio.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={ejercicio.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>Grupo Muscular:</label>
          <input
            type="text"
            name="muscleGroup"
            value={ejercicio.muscleGroup}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Agregar Ejercicio</button>
      </form>
    </div>
  );
}
export default AddExercise;
