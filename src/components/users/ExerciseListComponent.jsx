import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { ExercisesService } from "../../service/index";

import ExercisePostComponent from "./ExercisePostComponent";

function ExerciseListComponent() {
  const { user } = useContext(AppContext);
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ name: "", muscleGroup: "" });

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await ExercisesService(user.token);

        // Filtrar ejercicios según los criterios de búsqueda
        const filteredExercises = data.filter((exercise) => {
          const nameMatch =
            exercise.name.toLowerCase().includes(filters.name.toLowerCase()) ||
            exercise.description.toLowerCase().includes(filters.name.toLowerCase());
          const muscleGroupMatch =
            filters.muscleGroup === "" ||
            exercise.muscleGroup === filters.muscleGroup;

          return nameMatch && muscleGroupMatch;
        });

        setExercises(filteredExercises);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchExercises();
  }, [user, filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div>
      <h2>Lista de Ejercicios</h2>

      <div className="filter-form">
        <div>
          <label htmlFor="name">Filtrar por Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <label htmlFor="muscleGroup">Filtrar por Grupo Muscular:</label>
          <select
            id="muscleGroup"
            name="muscleGroup"
            value={filters.muscleGroup}
            onChange={handleFilterChange}
          >
            <option value="">Seleccione un grupo muscular</option>
            <option value="Tren superior">Tren superior</option>
            <option value="Tren inferior">Tren inferior</option>
            <option value="core">Core</option>
          </select>
        </div>
      </div>

      <div className="exercise-container">
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : exercises.length > 0 ? (
          exercises.map((exercise) => (
            <div className="exercise-card" key={exercise.id}>
              <ExercisePostComponent
                exercise={exercise}
                isFavorite={exercise.isFavorite}
                isRecommended={exercise.isRecommended}
              />
            </div>
          ))
        ) : (
          <p>No hay ejercicios disponibles</p>
        )}
      </div>
    </div>
  );
}

export default ExerciseListComponent;
