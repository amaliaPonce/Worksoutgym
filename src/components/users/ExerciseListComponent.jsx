import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ExercisePostComponent from "./ExercisePostComponent";
function ExerciseListComponent() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AppContext);

  useEffect(() => {
    // Configura los encabezados de la solicitud con el token de autenticación
    const headers = {
      Authorization: ` ${user.token}`,
    };

    fetch("http://localhost:8000/exercises/listExercises", {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("No autorizado: Debes iniciar sesión.");
          } else if (response.status === 404) {
            throw new Error("Ejercicios no encontrados.");
          } else {
            throw new Error("Error de red: " + response.status + " " + response.statusText);
          }
        }
        return response.json();
      })
      .then((data) => {
        setExercises(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [user.token]);

  return (
    <div>
      <h2>Lista de Ejercicios</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : exercises.length > 0 ? (
        <ul>
          {exercises.map((exercise) => (
            <li key={exercise.id}>
              <ExercisePostComponent exercise={exercise} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay ejercicios disponibles</p>
      )}
    </div>
  );
}

export default ExerciseListComponent;
