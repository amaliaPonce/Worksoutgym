import React from "react";
import ExerciseListComponent from "../../components/users/ExerciseListComponent";
import AddExercise from "../../components/users/AddExerciseComponent";
import "../../styles/adminDashboard/exercisePage.css"
import UpdateExercise from "../../components/users/UpdateExercise";


function ExercisePage() {
  return (
    <div className="exercise-page-container">
      <ExerciseListComponent />
      <AddExercise />
      <UpdateExercise />

    </div>
  );
}
export default ExercisePage;
