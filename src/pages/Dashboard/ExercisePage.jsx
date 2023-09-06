import React from "react";
import ExerciseListComponent from "../../components/users/ExerciseListComponent";
import AddExercise from "../../components/users/AddExerciseComponent";
import "../../styles/adminDashboard/exercisePage.css"
import UpdateExercise from "../../components/users/UpdateExercise";
import DeleteExercise from "../../components/users/DeleteExercise";
import ExerciseInfoPage from "../../components/users/InfoPageExercise";

function ExercisePage() {
  return (
    <div className="exercise-page-container">
      <ExerciseListComponent />
      <AddExercise />
      <UpdateExercise />
      <DeleteExercise />
      <ExerciseInfoPage />

    </div>
  );
}
export default ExercisePage;
