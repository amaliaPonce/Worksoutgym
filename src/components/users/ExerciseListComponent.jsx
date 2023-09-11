import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { ExercisesService, FavoriteExercisesService } from "../../service/index";
import ExercisePostComponent from "./ExercisePostComponent";

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

  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await ExercisesService(user.token);
        console.log("Data from ExercisesService:", data); // Agregado para verificar los datos obtenidos

        const filteredExercises = data.filter((exercise) => {
          const nameMatch =
            exercise.name.toLowerCase().includes(filters.name.toLowerCase()) ||
            exercise.description.toLowerCase().includes(filters.name.toLowerCase());
          const muscleGroupMatch =
            filters.muscleGroup === "" ||
            exercise.muscleGroup === filters.muscleGroup;
          const favoriteMatch =
            !filters.favorite || userFavorites.includes(exercise.id);
          const recommendedMatch =
            !filters.recommended || exercise.isRecommended === 1;

          return (
            nameMatch && muscleGroupMatch && favoriteMatch && recommendedMatch
          );
        });

        console.log("Filtered Exercises:", filteredExercises); // Agregado para verificar los ejercicios después del filtrado

        setExercises(filteredExercises);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    const fetchUserFavorites = async () => {
      try {
        if (!user || !user.token || !user.id) {
          throw new Error("Usuario no autenticado o datos de usuario incompletos.");
        }
    

        const userFavoriteExercises = await FavoriteExercisesService(
          user.token,
          user
        );
        console.log(
          "User Favorites from FavoriteExercisesService:",
          userFavoriteExercises
        ); // Agregado para verificar los favoritos del usuario
        setUserFavorites(
          userFavoriteExercises.map(
            (favoriteExercise) => favoriteExercise.exercise_id
          )
        );
      } catch (error) {
        console.error(
          "Error al obtener la lista de favoritos del usuario:",
          error
        );
      }
    };

    console.log("Filters:", filters); // Agregado para verificar el estado de los filtros
    fetchExercises();
    fetchUserFavorites();
  }, [user, filters, userFavorites]);

  const handleFilterChange = (e) => {
    const { name, value, type } = e.target;
    const sanitizedValue = type === "checkbox" ? e.target.checked : value;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: sanitizedValue }));
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
        <div>
          <label htmlFor="favorite">Favoritos:</label>
          <input
            type="checkbox"
            id="favorite"
            name="favorite"
            checked={filters.favorite}
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <label htmlFor="recommended">Recomendados:</label>
          <input
            type="checkbox"
            id="recommended"
            name="recommended"
            checked={filters.recommended}
            onChange={handleFilterChange}
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
            <div className="exercise-card" key={exercise.id}>
              <ExercisePostComponent
                exercise={exercise}
                isFavorite={userFavorites.includes(exercise.id)}
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
