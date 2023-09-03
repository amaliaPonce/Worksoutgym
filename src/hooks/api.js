// Importamos todas las funciones de los hooks
import useFetch from "./useFetch";

export const AddExercise = () =>
  useFetch("http://localhost:8000/exercises/newExercise");
export const FavoriteExercise = () =>
  useFetch("http://localhost:8000/exercises/favoriteExercise");
export const useExerciseList = () =>
  useFetch("http://localhost:8000/exercises/listExercises");
