import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { ExercisesService } from "../../service/index";

function ExerciseListComponent() {
  const { user } = useContext(AppContext);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const data = await ExercisesService(user.token);
        setExercises(data);
      } catch (error) {
        console.error(`Error en la solicitud: ${error.message}`);
      }
    };

    fetchExercises();
  }, [user]);

  return (
    <div>
      <h2>Lista de Ejercicios</h2>

      <div className="exercise-container">
        {exercises.map((exercise) => (
          <div className="exercise-card" key={exercise.id}>
            <div className="exercise-image">
              <img
                src={`http://localhost:8000/uploads/${exercise.photoName}`}
                alt={exercise.name}
              />
            </div>
            <div className="exercise-details">
              <p>
                <strong>ID:</strong> {exercise.id}
              </p>
              <p>
                <strong>Nombre:</strong> {exercise.name}
              </p>
              <p className="exercise-details">
                <strong>Descripción:</strong> {exercise.description}
              </p>
              <p className="exercise-details">
                <strong>Grupo Muscular:</strong> {exercise.muscleGroup}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExerciseListComponent;
