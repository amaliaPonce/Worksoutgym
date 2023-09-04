import  { useContext } from "react";
import FavExerciseComponent from "../../components/users/FavExerciseComponent";
import ExerciseListComponent from "./ExerciseListComponent";
import { AppContext } from "../../context/AppContext";

function ClientComponent() {
  const { user } = useContext(AppContext);

  return (
    <div>
      <h2>Cliente</h2>
      {user === "client" && (
        <>
          <ExerciseListComponent />
          <FavExerciseComponent />
        </>
      )}
    </div>
  );
}

export default ClientComponent;
