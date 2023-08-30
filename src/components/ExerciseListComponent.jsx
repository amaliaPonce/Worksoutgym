import React, { useState, useEffect } from "react";

// este import es la conexion al backend pero no devuelve los ejercicios
import { post } from "../api";

// Como hago para que esto me devuelva la lista de todos los ejercicios en un formato json que necesito
// Necesito un Fetch que me retorne el array de ejercicios??
const ExerciseListComponent = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const getEjercicios = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/exercises/listExercises"
        );

        if (!response.ok) {
          // Manejo de errores de red
          throw new Error(
            `Error en la solicitud: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        setExercises(data);
        return data;
      } catch (error) {
        // Manejo de errores generales
        throw new Error(`Error en la solicitud: ${error.message}`);
      }
    };

    getEjercicios();

    //  post("/exercises/getExercises", {}).then((response) => {
    //    setExercises(response.data);
    //  });
  }, []);

  // la primera parte del return me lo muestra pero no consigo que me devuelva los datos
  return (
    <div>
      <h2>Lista de Ejercicios</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Grupo Muscular</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, index) => (
            <tr key={index}>
              <td>{exercise.name}</td>
              <td>{exercise.description}</td>
              <td>{exercise.muscleGroup}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExerciseListComponent;
