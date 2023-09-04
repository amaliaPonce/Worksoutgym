import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getExercises = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/exercises/listExercises",
          {
            headers: {
              Authorization: ` ${user.token}`,
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

    getExercises();
  }, [user]);

  return exercises;
};
