import React from "react";
import ExerciseListComponent from "../../components/users/ExerciseListComponent";
import AddExercise from "../../components/users/AddExerciseComponent";
import "../../styles/adminDashboard/exercisePage.css"
import UpdateExercise from "../../components/users/UpdateExercise";
import DeleteExercise from "../../components/users/DeleteExercise";

function ExercisePage() {
  return (
    <div className="exercise-page-container">
      <ExerciseListComponent />
      <AddExercise />
      <UpdateExercise />
      <DeleteExercise />
    {/* aquí importamos los componentes que queremos que se vean en el main de ejercicios */}
    </div>
  );
}
export default ExercisePage;
