// Importamos todas las funciones de los hooks
import useFetch from "./useFetch";

export const useExerciseList = () =>
  useFetch("http://localhost:8000/exercises/listExercises");
