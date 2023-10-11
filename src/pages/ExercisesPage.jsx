import { useContext } from "react";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import ExerciseListComponent from "../components/users/ExerciseListComponent";
import AddExerciseComponent from "../components/users/AddExerciseComponent";
import { AppContext } from "../context/AppContext";
import "../styles/dashboard/exercisePage.css";
import useExerciseList from "../hooks/useExerciseList";

const ExercisesPage = () => {
  const { user } = useContext(AppContext);
  const { exercises, addExercise } = useExerciseList(user.token);
  return (
    <main className="page-container">
      <section className="exercise-page-container">
        <HeaderDashboard />
        <ExerciseListComponent exercisesList={exercises} />
      </section>

      {user.role === "admin" && (
        <aside className="add-exercise-container">
          <AddExerciseComponent addExercise={addExercise} />
        </aside>
      )}

      <aside className="sidebar">
        <Sidebar />
      </aside>
    </main>
  );
};

export default ExercisesPage;
