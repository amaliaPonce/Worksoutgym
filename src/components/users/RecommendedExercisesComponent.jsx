import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { MarkRecommendedService } from "../../service/index";
import Button from "../Button";
import { useTheme } from "../../context/ThemeContext";
const RecommendedExerciseComponent = ({ exercise }) => {
  const [isRecommended, setIsRecommended] = useState(false);
  const { user } = useContext(AppContext);
  const theme = useTheme();
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
    <section>
      <Button
        handleClick={handleToggleRecommendation}
        className={`buttons ${theme}`}
      >
        {isRecommended
          ? "Desmarcar como recomendado"
          : "Marcar como recomendado"}
      </Button>
    </section>
  );
};

export default RecommendedExerciseComponent;
