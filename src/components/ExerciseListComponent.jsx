import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

const ExerciseListComponent = () => {
  const [exercises, setExercises] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getEjercicios = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/exercises/listExercises",
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Error en la solicitud: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        setExercises(data);
      } catch (error) {
        // Manejo de errores generales
        console.error(`Error en la solicitud: ${error.message}`);
      }
    };

    getEjercicios();
  }, [user]);

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
