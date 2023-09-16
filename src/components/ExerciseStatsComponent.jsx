import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function ExerciseStatsComponent({ exercises }) {
  const { user } = useContext(AppContext);

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

    const percentage = (
      (filteredExercises.length / exercises.length) *
      100
    ).toFixed(2);

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
      percentages[group] = (
        (muscleGroupCounts[group] / totalExercises) *
        100
      ).toFixed(2);
    }

    return percentages;
  };

  const muscleGroupPercentages = calculateMuscleGroupPercentage();

  const getLastCreatedExercises = (count) => {
    if (!exercises || exercises.length === 0) {
      return [];
    }

    const sortedExercises = [...exercises].sort((a, b) =>
      b.created_at.localeCompare(a.created_at)
    );

    return sortedExercises.slice(0, count);
  };

  const getLastUpdatedExercises = (count) => {
    if (!exercises || exercises.length === 0) {
      return [];
    }

    const sortedExercises = [...exercises].sort((a, b) =>
      b.updated_at.localeCompare(a.updated_at)
    );

    return sortedExercises.slice(0, count);
  };

  const lastCreatedExercises = getLastCreatedExercises(5);
  const lastUpdatedExercises = getLastUpdatedExercises(5);

  return (
    <>
      <h3 className="section-heading">Porcentaje de ejercicios por grupo muscular:</h3>
      {Object.keys(muscleGroupPercentages).map((group) => (
        <p key={group} className="percentage-text">
          <span className="percentage-circle">{muscleGroupPercentages[group]}%</span>
          {group}
        </p>
      ))}

      <p className="percentage-text">
        <span className="percentage-circle green-circle">{favoriteStats.percentage}%</span>
        Porcentaje de ejercicios favoritos: {favoriteStats.count} de {exercises.length}
      </p>
      <p className="percentage-text">
        <span className="percentage-circle blue-circle">{recommendedStats.percentage}%</span>
        Porcentaje de ejercicios recomendados: {recommendedStats.count} de {exercises.length}
      </p>

      <h3 className="section-heading">Últimos ejercicios creados:</h3>
      <ul className="exercise-list">
        {lastCreatedExercises.map((exercise) => (
          <li key={exercise.id}>
            <Link to={`/usersPage/exercises/${exercise.id}`} className="exercise-link">
              {exercise.name}
              <span className="info-text">Muscle Group: {exercise.muscleGroup}</span>
              <span className="info-text">Created At: {exercise.created_at}</span>
            </Link>
          </li>
        ))}
      </ul>
      {user?.role === "admin" && (
        <>
          <h3 className="section-heading">Últimos ejercicios actualizados:</h3>
          <ul className="exercise-list">
            {lastUpdatedExercises.map((exercise) => (
              <li key={exercise.id}>
                <Link to={`/usersPage/exercises/${exercise.id}`} className="exercise-link">
                  {exercise.name}
                  <span className="info-text">Muscle Group: {exercise.muscleGroup}</span>
                  <span className="info-text">Updated At: {exercise.updated_at}</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default ExerciseStatsComponent;
