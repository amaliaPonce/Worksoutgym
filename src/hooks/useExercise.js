import { useEffect, useState } from "react";
import { infoExercisesService } from "../service/index";

const useExercise = (id) => {
  const [exercise, setExercise] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadExercise = async () => {
      try {
        setLoading(true);
        const data = await infoExercisesService(id);

        setExercise(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadExercise();
  }, [id]);

  return { exercise, error, loading };
};

export default useExercise;
