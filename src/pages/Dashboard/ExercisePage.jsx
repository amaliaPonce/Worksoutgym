import React from "react";
import ExerciseListComponent from "../../components/users/ExerciseListComponent";
import AddExercise from "../../components/users/AddExerciseComponent";
import "../../styles/adminDashboard/exercisePage.css"

function ExercisePage() {
  return (
    <div className="exercise-page-container">
      <ExerciseListComponent />
      <AddExercise />
    </div>
  );
}
export default ExercisePage;
