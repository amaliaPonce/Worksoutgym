import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";

function AddExercise() {
  const [ejercicio, setEjercicio] = useState({
    name: "",
    description: "",
    muscleGroup: "",
  });
  const { user } = useContext(AppContext);

  useEffect(() => {
    // Configura los encabezados de la solicitud con el token de autenticación
    const headers = {
      Authorization: ` ${user.token}`,
    };

    const postExercise = async () => {
      try {
        const response = await fetch("/exercises/newExercise", {
          method: "POST",
          headers,
          body: JSON.stringify(ejercicio),
        });

        if (!response.ok) {
          const errorMessage = `Error en la solicitud: ${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        }

        const responseData = await response.json();
        if (responseData.status === 201) {
          console.log("Ejercicio agregado exitosamente");
        } else {
          console.error("Error al agregar el ejercicio");
        }
      } catch (error) {
        console.error("Error de red", error);
      }
    };

    // Llama a la función postExercise cuando se actualice el estado del ejercicio
    if (ejercicio.name && ejercicio.description && ejercicio.muscleGroup) {
      postExercise();
    }
  }, [user, ejercicio]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEjercicio({
      ...ejercicio,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Agregar Ejercicio de Gimnasio</h2>
      <form>
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
