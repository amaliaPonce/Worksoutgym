import { useState, useEffect } from "react";
import { AddExerciseService, ExercisesService } from "../service/index";

export const useExerciseList = (userToken) => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadExercises = async () => {
      try {
        setLoading(true);
        const data = await ExercisesService(userToken);

        setExercises(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadExercises();
  }, [userToken]);
  const addExercise = async (token, data) => {
    // setExercises([data, ...exercises]);
    const result = await AddExerciseService(token, data);
    const allNewExercisesList = await ExercisesService(userToken);
    setExercises(allNewExercisesList);
    return result;
  };

  const removeExercise = (id) => {
    setExercises(exercises.filter((exercise) => exercise.id !== id));
  };

  return { exercises, error, loading, addExercise, removeExercise };
};
export default useExerciseList;
