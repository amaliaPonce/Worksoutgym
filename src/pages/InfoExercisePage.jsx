import React from "react";
import InfoExerciseComponent from "../components/users/InfoExerciseComponent";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import { useTheme } from "../context/ThemeContext";
const ExercisesPage = () => {
  const theme = useTheme();

  return (
    <div className={`pages ${theme}`}>
      <HeaderDashboard />
      <InfoExerciseComponent />
      <Sidebar />
    </div>
  );
};

export default ExercisesPage;
