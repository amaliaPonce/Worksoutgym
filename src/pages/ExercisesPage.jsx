import { useContext } from "react";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import ExerciseListComponent from "../components/users/ExerciseListComponent";
import AddExerciseComponent from "../components/users/AddExerciseComponent";
import { AppContext } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext";
const ExercisesPage = () => {
  const { user } = useContext(AppContext);
  const theme = useTheme();

  return (
    <div className={`pages ${theme}`}>
      <HeaderDashboard />

      <ExerciseListComponent />

      {user.role === "admin" && <AddExerciseComponent />}

      <Sidebar />
    </div>
  );
};

export default ExercisesPage;
