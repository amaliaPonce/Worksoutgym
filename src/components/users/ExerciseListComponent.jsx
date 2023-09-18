import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { ExercisesService } from "../../service/index";
import ExercisePostComponent from "./ExercisePostComponent";
import "../../styles/dashboard/exercisePage.css"
function ExerciseListComponent() {
  const { user } = useContext(AppContext);
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    name: "",
    muscleGroup: "",
    favorite: false,
    recommended: false,
  });

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await ExercisesService(user.token);

        const filteredExercises = data.filter((exercise) => {
          const nameMatch =
            exercise.name.toLowerCase().includes(filters.name.toLowerCase()) ||
            exercise.description
              .toLowerCase()
              .includes(filters.name.toLowerCase());
          const muscleGroupMatch =
            filters.muscleGroup === "" ||
            exercise.muscleGroup.toLowerCase() ===
              filters.muscleGroup.toLowerCase();
          const recommendedMatch =
            !filters.recommended || exercise.is_recommended;
          const favoriteMatch = !filters.favorite || exercise.is_favorite;

          return (
            nameMatch && muscleGroupMatch && recommendedMatch && favoriteMatch
          );
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
    const { name, value, type } = e.target;
    const sanitizedValue = type === "checkbox" ? e.target.checked : value;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: sanitizedValue }));
  };

  return (
    <section>
      <h2>Lista de Ejercicios</h2>
      <form className="filter-form">
        <section>
          <label htmlFor="name">Filtrar por Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
          />
        </section>
        <section>
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
        </section>
        <section>
          <label htmlFor="recommended">Recomendados:</label>
          <input
            type="checkbox"
            id="recommended"
            name="recommended"
            checked={filters.recommended}
            onChange={handleFilterChange}
          />
        </section>
        <section>
          <label htmlFor="favorite">Favoritos:</label>
          <input
            type="checkbox"
            id="favorite"
            name="favorite"
            checked={filters.favorite}
            onChange={handleFilterChange}
          />
        </section>
      </form>

      <section className="exercise-container">
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : exercises.length > 0 ? (
          exercises.map((exercise) => (
            <section key={exercise.id} className="exercise-card">
              <ExercisePostComponent
                exercise={exercise}
                isRecommended={exercise.is_recommended}
                isFavorite={exercise.is_favorite}
              />
            </section>
          ))
        ) : (
          <p>No hay ejercicios disponibles</p>
        )}
      </section>
    </section>
  );
}

export default ExerciseListComponent;
