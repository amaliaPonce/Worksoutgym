import React from "react";

const ExercisePost = ({ exercise }) => {
  return (
    <article>
      <p>ID: {exercise.id}</p>
      <p>Nombre de la Foto: {exercise.photoName}</p>
      <p>Descripción: {exercise.description}</p>
      <p>Grupo Muscular: {exercise.muscleGroup}</p>
    </article>
  );
};

export default ExercisePost;
