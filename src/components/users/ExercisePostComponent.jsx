import React from "react";
import "../../styles/exerciseList.css";

const ExercisePostComponent = ({ exercise }) => {
  return (
    <div className="exercise-card">
      <div className="exercise-image">
        <img
          src={`http://localhost:8000/uploads/${exercise.photoName}`}
          alt={exercise.name}
        />
      </div>
      <div className="exercise-details">
        <p className="exercise-title">
          <strong>ID:</strong> {exercise.id}
        </p>
        <p className="exercise-title">
          <strong>Nombre:</strong> {exercise.name}
        </p>
        <p className="exercise-details">
          <strong>Descripción:</strong> {exercise.description}
        </p>
        <p className="exercise-details">
          <strong>Grupo Muscular:</strong> {exercise.muscleGroup}
        </p>
      </div>
      <div className="exercise-arrow">
        <i className='bx bx-arrow-to-right'></i>
      </div>
    </div>
  );
};

export default ExercisePostComponent;
