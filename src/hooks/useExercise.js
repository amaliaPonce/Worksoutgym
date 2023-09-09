import { useEffect, useState } from "react";
import { infoExercisesService } from "../service/index";

const useExercise = (id, token) => {
  const [exercise, setExercise] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadExercise = async () => {
      try {
        setLoading(true);
        const data = await infoExercisesService(id, token);

        setExercise(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadExercise();
  }, [id, token]);

  return { exercise, error, loading };
};

export default useExercise;
