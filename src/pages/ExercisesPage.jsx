import { useContext } from "react";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import ExerciseListComponent from "../components/users/ExerciseListComponent";
import AddExerciseComponent from "../components/users/AddExerciseComponent";
import { AppContext } from "../context/AppContext";
import "../styles/dashboard/exercisePage.css";

const ExercisesPage = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="page-container">
      <div className="exercise-page-container">
        <HeaderDashboard />

        <ExerciseListComponent />
      </div>

      {user.role === "admin" && (
        <div className="add-exercise-container">
          <AddExerciseComponent />
        </div>
      )}

      <Sidebar />
    </div>
  );
};

export default ExercisesPage;
