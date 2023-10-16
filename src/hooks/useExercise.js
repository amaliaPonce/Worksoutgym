import { useEffect, useState, useCallback } from "react";
import { infoExercisesService } from "../service/index";

const useExercise = (id, token) => {
  const [exercise, setExercise] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadExercise = useCallback(async () => {
    try {
      setLoading(true);
      const data = await infoExercisesService(id, token);
      setExercise(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [id, token]);

  useEffect(() => {
    loadExercise();
  }, [loadExercise]);

  return { exercise, error, loading, refetch: loadExercise };
};

export default useExercise;
