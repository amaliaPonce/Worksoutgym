const RecommendedExercisesList = ({ recommendedExercises }) => {
  const exercisesToShow = recommendedExercises || [];

  return (
    <div>
      <h2>Ejercicios Recomendados</h2>
      {exercisesToShow.length > 0 ? (
        <div className="exercise-container">
          {exercisesToShow.map((exercise) => (
            <div key={exercise.id}>
              <h3>{exercise.name}</h3>
              <p>Descripción: {exercise.description}</p>
              <p>Grupo Muscular: {exercise.muscleGroup}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay ejercicios recomendados disponibles</p>
      )}
    </div>
  );
};
export default RecommendedExercisesList;
