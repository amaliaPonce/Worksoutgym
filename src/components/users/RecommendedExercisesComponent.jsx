import React from "react";

const ExerciseRecommendationToggle = ({
  idExercise,
  isRecommended,
  markExercise,
}) => {
  const toggleRecommendation = async () => {
    const result = await markExercise(idExercise, !isRecommended);
    if (result.success) {
    } else {
    }
  };

  return (
    <div>
      <button onClick={toggleRecommendation}>
        {isRecommended
          ? "Desmarcar como recomendado"
          : "Marcar como recomendado"}
      </button>
    </div>
  );
};

export default ExerciseRecommendationToggle;
