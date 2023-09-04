import React from "react";

const ExercisePostComponent = ({ exercise }) => {
  return (
    <div className="exercise-details">
      <p>ID: {exercise.id}</p>
      <p>Nombre de la Foto: {exercise.photoName}</p>
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
