import React from "react";
import { Link } from "react-router-dom"; 

function ExerciseStatsComponent({ exercises }) {
  const calculatePercentage = (filter) => {
    if (!exercises || exercises.length === 0) {
      return {
        percentage: 0,
        count: 0,
      };
    }

    const filteredExercises = exercises.filter((exercise) => {
      switch (filter) {
        case "favorite":
          return exercise.is_favorite;
        case "recommended":
          return exercise.is_recommended;
        default:
          return false;
      }
    });

    const percentage = ((filteredExercises.length / exercises.length) * 100).toFixed(2);

    return {
      percentage,
      count: filteredExercises.length,
    };
  };

  const favoriteStats = calculatePercentage("favorite");
  const recommendedStats = calculatePercentage("recommended");

  const calculateMuscleGroupPercentage = () => {
    if (!exercises || exercises.length === 0) {
      return {};
    }

    const muscleGroupCounts = exercises.reduce((counts, exercise) => {
      if (exercise.muscleGroup) {
        counts[exercise.muscleGroup] = (counts[exercise.muscleGroup] || 0) + 1;
      }
      return counts;
    }, {});

    const totalExercises = exercises.length;
    const percentages = {};
    for (const group in muscleGroupCounts) {
      percentages[group] = ((muscleGroupCounts[group] / totalExercises) * 100).toFixed(2);
    }

    return percentages;
  };

  const muscleGroupPercentages = calculateMuscleGroupPercentage();

  const getLastCreatedExercises = (count) => {
    if (!exercises || exercises.length === 0) {
      return [];
    }

    const sortedExercises = [...exercises].sort((a, b) => b.created_at.localeCompare(a.created_at));

    return sortedExercises.slice(0, count);
  };

  const lastCreatedExercises = getLastCreatedExercises(5);

  return (
    <div>
      <h3>Porcentaje de ejercicios por grupo muscular:</h3>
      {Object.keys(muscleGroupPercentages).map((group) => (
        <p key={group}>
          {group}: {muscleGroupPercentages[group]}%
        </p>
      ))}

      <p>
        Porcentaje de ejercicios favoritos: {favoriteStats.percentage}% ({favoriteStats.count} de {exercises.length})
      </p>
      <p>
        Porcentaje de ejercicios recomendados: {recommendedStats.percentage}% ({recommendedStats.count} de {exercises.length})
      </p>

      <h3>Últimos ejercicios creados:</h3>
      <ul>
        {lastCreatedExercises.map((exercise) => (
          <li key={exercise.id}>
            <Link to={`/usersPage/exercises/${exercise.id}`}>{exercise.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseStatsComponent;
