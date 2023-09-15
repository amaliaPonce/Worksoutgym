import React from "react";
import InfoExerciseComponent from "../components/users/InfoExerciseComponent";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";

const ExercisesPage = () => {
  return (
    <div className="pages">
      <HeaderDashboard />
      <InfoExerciseComponent />
      <Sidebar />
    </div>
  );
};

export default ExercisesPage;
