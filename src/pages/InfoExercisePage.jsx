import React from "react";
import InfoExerciseComponent from "../components/users/InfoExerciseComponent";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";

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
      <InfoExerciseComponent />
      <Sidebar />
    </div>
  );
};

export default ExercisesPage;
