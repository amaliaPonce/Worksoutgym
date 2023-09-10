import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { filterExercisesService } from "../../service/index";
import Button from "../Button";
function ExerciseFilter() {
  const { user } = useContext(AppContext);
  const [name, setName] = useState("");
  const [muscleGroup, setMuscleGroup] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [recommended, setRecommended] = useState(false);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFilter = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await filterExercisesService(user.token, {
        name,
        muscleGroup,
        favorite,
        recommended,
      });

      if (response.status === "ok") {
        setFilteredExercises(response.data);
      } else {
        setError("Error al filtrar ejercicios");
      }
    } catch (error) {
      setError("Error de red");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Filtrar Ejercicios</h2>
      <div className="filter-form">
        <div>
          <label htmlFor="filterName">Filtrar por Nombre:</label>
          <input
            type="text"
            id="filterName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="filterMuscleGroup">Filtrar por Grupo Muscular:</label>
          <select
            id="filterMuscleGroup"
            value={muscleGroup}
            onChange={(e) => setMuscleGroup(e.target.value)}
          >
            <option value="">Seleccione un grupo muscular</option>
            <option value="Tren superior">Tren superior</option>
            <option value="Tren inferior">Tren inferior</option>
            <option value="core">Core</option>
            <option value="Full body">Full body</option>
          </select>
        </div>
        <div className="exercise-container">
          <label>Favorito:</label>
          <input
            type="checkbox"
            checked={favorite}
            onChange={() => setFavorite(!favorite)}
          />
        </div>
        <div className="exercise-container">
          <label>Recomendado:</label>
          <input
            type="checkbox"
            checked={recommended}
            onChange={() => setRecommended(!recommended)}
          />
        </div>
        <Button handleClick={handleFilter}>Filtrar</Button>
      </div>

      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      <h3>Resultados:</h3>
      <ul>
        {filteredExercises.map((exercise) => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default ExerciseFilter;
