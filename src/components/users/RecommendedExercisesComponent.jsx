import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { MarkRecommendedService } from "../../service/index";

const RecommendedExerciseComponent = ({ exercise }) => {
  const [isRecommended, setIsRecommended] = useState(false);
  const { user } = useContext(AppContext);

  useEffect(() => {
    const checkIfRecommended = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND}/exercises/recommendedExercise/?idExercise=${exercise.id}`
        );
        if (response.ok) {
          const data = await response.json();
          setIsRecommended(data.isRecommended);
        }
      } catch (error) {
        console.error(
          "Error al obtener el estado de recomendado:",
          error.message
        );
      }
    };

    checkIfRecommended();
  }, [exercise.id]);

  const handleToggleRecommendation = async () => {
    try {
      const result = await MarkRecommendedService(
        exercise.id,
        !isRecommended,
        user
      );

      if (result.success) {
        setIsRecommended(!isRecommended);
        console.log(result.message);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error(
        "Error al marcar/desmarcar como recomendado:",
        error.message
      );
    }
  };

  return (
    <div>
      <button onClick={handleToggleRecommendation}>
        {isRecommended
          ? "Desmarcar como recomendado"
          : "Marcar como recomendado"}
      </button>
    </div>
  );
};

export default RecommendedExerciseComponent;
