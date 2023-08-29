import React, { useState, useEffect } from "react";

// este import es la conexion al backend pero no devuelve los ejercicios
import { post } from "../api";

// Como hago para que esto me devuelva la lista de todos los ejercicios en un formato json que necesito
// Necesito un Fetch que me retorne el array de ejercicios??
const ExerciseListComponent = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    post("/exercises/getExercises", {}).then((response) => {
      setExercises(response.data);
    });
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
