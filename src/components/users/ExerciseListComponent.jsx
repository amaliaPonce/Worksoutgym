import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { ExercisesService } from "../../service/index";
import ExercisePostComponent from "./ExercisePostComponent";

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
            <ExercisePostComponent
              exercise={{
                ...exercise.data,
                photoName: exercise.photoName,
              }}
              isFavorite={exercise.isFavorite}
              isRecommended={exercise.isRecommended}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExerciseListComponent;
