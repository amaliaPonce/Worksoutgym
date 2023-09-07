import React, { useState, useEffect, useContext, useCallback } from "react";
import { AppContext } from "../../context/AppContext";
import ExercisePostComponent from "./ExercisePostComponent";
import FavoriteExercisesComponent from "./FavoriteExercisesComponent"; 

function ExerciseListComponent() {
  const { user } = useContext(AppContext);
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterName, setFilterName] = useState("");
  const [filterMuscleGroup, setFilterMuscleGroup] = useState("");
  const [filterFavorites, setFilterFavorites] = useState(false);

  const fetchExercises = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const headers = {
        Authorization: user.token,
      };

      let url = `http://localhost:8000/exercises/listExercises?name=${filterName}&muscleGroup=${filterMuscleGroup}`;

      if (filterFavorites) {
          url += "&is_favorite=1";
      }

      const response = await fetch(url, {
        method: "GET",
        headers: headers,
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("No autorizado: Debes iniciar sesión.");
        } else if (response.status === 404) {
          throw new Error("Ejercicios no encontrados.");
        } else {
          throw new Error(
            "Error de red: " + response.status + " " + response.statusText
          );
        }
      }

      const data = await response.json();
      setExercises(data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [user.token, filterName, filterMuscleGroup, filterFavorites]);

  useEffect(() => {
    const fetchAndSetExercises = async () => {
      await fetchExercises();
    };

    fetchAndSetExercises();
  }, [user.token, filterName, filterMuscleGroup, filterFavorites, fetchExercises]);

  const handleFilterNameChange = (e) => {
    setFilterName(e.target.value);
  };

  const handleFilterMuscleGroupChange = (e) => {
    setFilterMuscleGroup(e.target.value);
  };

  return (
    <div>
      <h2>Lista de Ejercicios</h2>

      <div className="filter-form">
        <div>
          <label htmlFor="filterName">Filtrar por Nombre:</label>
          <input
            type="text"
            id="filterName"
            value={filterName}
            onChange={handleFilterNameChange}
          />
        </div>
        <div>
          <label htmlFor="filterMuscleGroup">Filtrar por Grupo Muscular:</label>
          <select
            id="filterMuscleGroup"
            value={filterMuscleGroup}
            onChange={handleFilterMuscleGroupChange}
          >
            <option value="">Seleccione un grupo muscular</option>
            <option value="Tren-superior">Tren-superior</option>
            <option value="Tren-inferior">Tren-inferior</option>
            <option value="core">Core</option>
          </select>
        </div>
        <div>
          <label htmlFor="filterFavorites">Mostrar Favoritos:</label>
          <input
            type="checkbox"
            id="filterFavorites"
            checked={filterFavorites}
            onChange={() => setFilterFavorites(!filterFavorites)}
          />
        </div>
      </div>

      <div className="exercise-container">
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : exercises.length > 0 ? (
          exercises.map((exercise) => (
            <ExercisePostComponent
              key={exercise.id}
              exercise={exercise}
              isFavorite={exercise.is_favorite === 1}
            >
              {exercise.is_favorite === 1 ? (
                <button>Quitar de Favoritos</button>
              ) : (
                <button>Marcar como Favorito</button>
              )}
            </ExercisePostComponent>
          ))
        ) : (
          <p>No hay ejercicios disponibles</p>
        )}
      </div>

      <FavoriteExercisesComponent />
    </div>
  );
}

export default ExerciseListComponent;
