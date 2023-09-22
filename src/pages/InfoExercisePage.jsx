import React from "react";
import InfoExerciseComponent from "../components/users/InfoExerciseComponent";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
const ExercisesPage = () => {
  return (
    <main>
      <HeaderDashboard />
      <InfoExerciseComponent />
      <Sidebar />
    </main>
  );
};

export default ExercisesPage;
