import React, { useState, useEffect } from "react";
import { toggleFavoriteExercise } from "../hooks/FavFecth";

function ExerciseItem({ exercise }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Aquí puedes verificar si el ejercicio es favorito para este usuario y actualizar isFavorite
    // Puedes hacer esto con una solicitud al backend cuando el componente se monte.
    // Ejemplo:
    // const checkIfFavorite = async () => {
    //   const response = await fetch(`/api/exercises/favoriteExercises/${exercise.id}`);
    //   if (response.ok) {
    //     const data = await response.json();
    //     setIsFavorite(data.isFavorite); // Suponiendo que el backend devuelve información sobre si es favorito
    //   }
    // };
    // checkIfFavorite();
  }, [exercise.id]);

  const handleToggleFavorite = async () => {
    const result = await toggleFavoriteExercise(exercise.id, isFavorite);
    if (result.success) {
      setIsFavorite(!isFavorite);
      console.log(result.message);
    } else {
      console.error(result.message);
    }
  };

  return (
    <div>
      <h3>{exercise.name}</h3>
      <p>{exercise.description}</p>
      <button onClick={handleToggleFavorite}>
        {isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
      </button>
    </div>
  );
}

export default ExerciseItem;
