import { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { ExercisesService } from "../service/index";

export const useExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const { user } = useContext(AppContext);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const data = await ExercisesService(user.token);
        setExercises(data);
      } catch (error) {
        // Manejo de errores generales
        console.error(`Error en la solicitud: ${error.message}`);
      }
    };

    fetchExercises();
  }, [user]);

  return exercises;
};
