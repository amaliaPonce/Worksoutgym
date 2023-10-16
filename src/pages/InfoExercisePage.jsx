import React from "react";
import InfoExerciseComponent from "../components/users/InfoExerciseComponent";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import loadExercise from "../hooks/useExercise"

const ExercisesPage = () => {
  return (
    <main>
      <HeaderDashboard />
      <InfoExerciseComponent refetch={loadExercise} />
      <Sidebar />
    </main>
  );
};

export default ExercisesPage;
