import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ExercisePostComponent from "./ExercisePostComponent";

function ExerciseListComponent() {
  const { user } = useContext(AppContext);
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false); // Cambiado a false inicialmente
  const [error, setError] = useState(null);
  const [filterName, setFilterName] = useState(""); // Filtro por nombre
  const [filterMuscleGroup, setFilterMuscleGroup] = useState(""); // Filtro por grupo muscular
  const [showFavorites, setShowFavorites] = useState(false); // Nuevo estado para mostrar favoritos

  useEffect(() => {
    const fetchExercises = async () => {
      setLoading(true);
      setError(null);

      try {
        // Configura los encabezados de la solicitud con el token de autenticación
        const headers = {
          Authorization: user.token,
        };

        // Construye la URL de la solicitud con los filtros de nombre, grupo muscular y favoritos
        const url = `http://localhost:8000/exercises/listExercises?name=${filterName}&muscleGroup=${filterMuscleGroup}&favorite=${showFavorites ? 1 : 0}`;

        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        });

        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("No autorizado: Debes iniciar sesión.");
          } else if (response.status === 404) {
            throw Error("Ejercicios no encontrados.");
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
    };

    fetchExercises();
  }, [user.token, filterName, filterMuscleGroup, showFavorites]); // Agregar showFavorites como dependencia

  // Función para manejar cambios en el filtro de nombre
  const handleFilterNameChange = (e) => {
    setFilterName(e.target.value);
  };

  // Función para manejar cambios en el filtro de grupo muscular
  const handleFilterMuscleGroupChange = (e) => {
    setFilterMuscleGroup(e.target.value);
  };

  // Función para cambiar el filtro de favoritos
  const toggleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div>
      <h2>Lista de Ejercicios</h2>

      {/* Botón para filtrar por favoritos */}
      <button onClick={toggleShowFavorites}>
        Mostrar Favoritos: {showFavorites ? "Sí" : "No"}
      </button>

      {/* Campos de filtro */}
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
              isFavorite={exercise.is_favorite}
            >
              <button>Marcar como Favorito</button>
            </ExercisePostComponent>
          ))
        ) : (
          <p>No hay ejercicios disponibles</p>
        )}
      </div>
    </div>
  );
}

export default ExerciseListComponent;
