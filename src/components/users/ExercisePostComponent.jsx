import React from "react";

const ExercisePostComponent = ({ exercise }) => {
  return (
    <div className="exercise-details">
      <p>ID: {exercise.id}</p>
      <div className="exercise-image">
                  <img
                    src={`http://localhost:8000/uploads/${exercise.photoName}`}
                    alt={exercise.name}
                  />
                </div>
      <p>
        <strong>Nombre:</strong> {exercise.name}
      </p>
      <p>
        <strong>Descripción:</strong> {exercise.description}
      </p>
      <p>
        <strong>Grupo Muscular:</strong> {exercise.muscleGroup}
      </p>
    </div>
  );
};

export default ExercisePostComponent;
