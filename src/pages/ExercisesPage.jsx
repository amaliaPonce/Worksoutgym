import React from "react";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import ExerciseListComponent from "../components/users/ExerciseListComponent";
import AddExerciseComponent from "../components/users/AddExerciseComponent"
import UpdateExerciseComponent from "../components/users/UpdateExerciseComponent"


const ExercisesPage = () => {
  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "500px",
  };

  return (
    <div style={pageStyle}>
      <HeaderDashboard />
      <ExerciseListComponent />
      <AddExerciseComponent />
      <UpdateExerciseComponent />
      <Sidebar />
    </div>
  );
};

export default ExercisesPage;
