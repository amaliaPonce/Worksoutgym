import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { VictoryPie, VictoryLegend } from "victory";
import "../styles/dashboard/main.css";

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

  const colorScale = ["#383E56", "#FB743E", "#9FB8AD"];

  return (
    <div className="exercise-stats">
      <div className="circle-container">
        <div className="circle">
          <div className="chart-container">
            {/* Gráfico de pastel 1 */}
            <VictoryPie
              data={Object.entries(muscleGroupPercentages).map(
                ([group, percentage]) => ({
                  x: `${group}: ${percentage}%`,
                  y: parseFloat(percentage),
                })
              )}
              innerRadius={50}
              style={{
                labels: {
                  display: "none",
                },
                data: {
                  stroke: "#fff",
                  strokeWidth: 1,
                  opacity: ({ active }) => (active ? 1 : 0.8),
                },
              }}
              events={[
                {
                  target: "data",
                  eventHandlers: {
                    onMouseOver: () => {
                      return [
                        {
                          target: "data",
                          mutation: () => ({ active: true }),
                        },
                      ];
                    },
                    onMouseOut: () => {
                      return [
                        {
                          target: "data",
                          mutation: () => ({ active: false }),
                        },
                      ];
                    },
                  },
                },
              ]}
              width={150}
              height={150}
              colorScale={colorScale}
            />
            {/* Leyenda para el primer gráfico de pastel */}
            <VictoryLegend
              orientation="vertical"
              gutter={10}
              style={{ labels: { fontSize: 25, fontFamily: "Montserrat" } }} // Añade la fuente aquí
              data={Object.entries(muscleGroupPercentages).map(
                ([group, percentage], index) => ({
                  name: `${group}: ${Math.round(percentage)}%`,
                  symbol: { fill: colorScale[index % colorScale.length] },
                })
              )}
            />
          </div>
        </div>

        <div className="circle">
          <div className="chart-container">
            {/* Gráfico de pastel 2 */}
            <VictoryPie
              innerRadius={50}
              data={[
                { x: "Favoritos", y: parseFloat(favoriteStats.percentage) },
                { x: "Otros", y: 100 - parseFloat(favoriteStats.percentage) },
              ]}
              style={{
                labels: {
                  display: "none", // Oculta las etiquetas
                },
                data: {
                  stroke: "#fff",
                  strokeWidth: 1,
                  opacity: ({ active }) => (active ? 1 : 0.8),
                },
              }}
              events={[
                {
                  target: "data",
                  eventHandlers: {
                    onMouseOver: () => {
                      return [
                        {
                          target: "data",
                          mutation: () => ({ active: true }),
                        },
                      ];
                    },
                    onMouseOut: () => {
                      return [
                        {
                          target: "data",
                          mutation: () => ({ active: false }),
                        },
                      ];
                    },
                  },
                },
              ]}
              width={150}
              height={150}
              colorScale={colorScale}
            />
            {/* Leyenda para el segundo gráfico de pastel */}
            <VictoryLegend
              orientation="vertical"
              gutter={10}
              style={{ labels: { fontSize: 25, fontFamily: "Montserrat" } }} // Añade la fuente aquí
              data={[
                {
                  name: `Favoritos: ${Math.round(favoriteStats.percentage)}%`,
                  symbol: { fill: colorScale[0] },
                },
                {
                  name: `Otros: ${Math.round(100 - favoriteStats.percentage)}%`,
                  symbol: { fill: colorScale[1] },
                },
              ]}
            />
          </div>
        </div>

        <div className="circle">
          <div className="chart-container">
            {/* Gráfico de pastel 3 */}
            <VictoryPie
              data={[
                {
                  x: "Recomendados",
                  y: parseFloat(recommendedStats.percentage),
                },
                {
                  x: "Otros",
                  y: 100 - parseFloat(recommendedStats.percentage),
                },
              ]}
              innerRadius={50}
              style={{
                labels: {
                  display: "none",
                },
                data: {
                  stroke: "#fff",
                  strokeWidth: 1,
                  opacity: ({ active }) => (active ? 1 : 0.8),
                },
              }}
              events={[
                {
                  target: "data",
                  eventHandlers: {
                    onMouseOver: () => {
                      return [
                        {
                          target: "data",
                          mutation: () => ({ active: true }),
                        },
                      ];
                    },
                    onMouseOut: () => {
                      return [
                        {
                          target: "data",
                          mutation: () => ({ active: false }),
                        },
                      ];
                    },
                  },
                },
              ]}
              width={150}
              height={150}
              colorScale={colorScale}
            />

            <VictoryLegend
              orientation="vertical"
              gutter={10}
              style={{ labels: { fontSize: 25, fontFamily: "Montserrat" } }} 
              data={[
                {
                  name: `Recomendados: ${Math.round(
                    recommendedStats.percentage
                  )}%`,
                  symbol: { fill: colorScale[0] },
                },
                {
                  name: `Otros: ${Math.round(
                    100 - recommendedStats.percentage
                  )}%`,
                  symbol: { fill: colorScale[1] },
                },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="legend">
        {Object.entries(muscleGroupPercentages).map(
          ([group, percentage], index) => (
            <div key={index} className="legend-item">
              <span
                className="legend-color"
                style={{
                  backgroundColor: colorScale[index % colorScale.length],
                }}
              />
            </div>
          )
        )}
      </div>

      <h3 className="section-heading">Últimos ejercicios creados:</h3>

      <ul className="exercise-list">
        {lastCreatedExercises.map((exercise) => (
          <li key={exercise.id}>
            <Link
              to={`/usersPage/exercises/${exercise.id}`}
              className="exercise-link"
            >
              {exercise.name}
              <span className="info-text">
                Muscle Group: {exercise.muscleGroup}
              </span>
              <span className="info-text">
                Creado: {exercise.created_at}
              </span>
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
                <Link
                  to={`/usersPage/exercises/${exercise.id}`}
                  className="exercise-link"
                >
                  {exercise.name}
                  <span className="info-text">
                    Muscle Group: {exercise.muscleGroup}
                  </span>
                  <span className="info-text">
                    Actualizado: {exercise.updated_at}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default ExerciseStatsComponent;
