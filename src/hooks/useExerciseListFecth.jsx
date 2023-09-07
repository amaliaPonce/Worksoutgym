import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import useEffect from "./useFetch";

export const useExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const { user } = useContext(AppContext);

  useEffect(() => {
    const getExercises = async () => {
      try {
        const baseUrl = process.env.REACT_APP_BACKEND;
        const relativeUrl = "/exercises/listExercises";
        const url = `${baseUrl}${relativeUrl}`;
        const response = await fetch(url, {
          headers: {
            Authorization: ` ${user.token}`,
          },
        });

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
