import { useContext } from "react";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import ExerciseListComponent from "../components/users/ExerciseListComponent";
import AddExerciseComponent from "../components/users/AddExerciseComponent";
import { AppContext } from "../context/AppContext";

const ExercisesPage = () => {
  const { user } = useContext(AppContext);

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
      {user.role === "admin" && <AddExerciseComponent />}
      <Sidebar />
    </div>
  );
};

export default ExercisesPage;
