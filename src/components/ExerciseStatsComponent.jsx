import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { VictoryPie } from 'victory';
import "../styles/dashboard/main.css"
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

  const lastCreatedExercises = getLastCreatedExercises(5);
  const lastUpdatedExercises = getLastUpdatedExercises(5);

  function getLastCreatedExercises(count) {
    if (!exercises || exercises.length === 0) {
      return [];
    }

    const sortedExercises = [...exercises].sort((a, b) =>
      b.created_at.localeCompare(a.created_at)
    );

    return sortedExercises.slice(0, count);
  }

  function getLastUpdatedExercises(count) {
    if (!exercises || exercises.length === 0) {
      return [];
    }

    const sortedExercises = [...exercises].sort((a, b) =>
      b.updated_at.localeCompare(a.updated_at)
    );

    return sortedExercises.slice(0, count);
  }

  return (
    <>
      <h3 className="section-heading">Porcentaje de ejercicios por grupo muscular:</h3>
      
      <VictoryPie
        data={Object.entries(muscleGroupPercentages).map(([group, percentage]) => ({
          x: `${group}: ${percentage}%`,
          y: parseFloat(percentage)
        }))}
        label={({ datum }) => datum.x}
        style={{ labels: { fill: "black" } }}
      />

      <h3 className="section-heading">Porcentaje de ejercicios favoritos:</h3>
      <VictoryPie
        data={[
          { x: "Favoritos", y: parseFloat(favoriteStats.percentage) },
          { x: "Otros", y: 100 - parseFloat(favoriteStats.percentage) }
        ]}
        label={({ datum }) => `${datum.x}: ${datum.y.toFixed(2)}%`}
        style={{ labels: { fill: "black" } }}
      />
      <p className="percentage-text">
        Porcentaje de ejercicios favoritos: {favoriteStats.count} de {exercises.length}
      </p>
      
      <h3 className="section-heading">Porcentaje de ejercicios recomendados:</h3>
      <VictoryPie
        data={[
          { x: "Recomendados", y: parseFloat(recommendedStats.percentage) },
          { x: "Otros", y: 100 - parseFloat(recommendedStats.percentage) }
        ]}
        label={({ datum }) => `${datum.x}: ${datum.y.toFixed(2)}%`}
        style={{ labels: { fill: "black" } }}
      />
      <p className="percentage-text">
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
