import React from "react";
//import FavExerciseComponent from "../components/FavExerciseComponent";
import ExerciseListComponent from "../components/ExerciseListComponent";
import { useAuth } from "../context/AuthContext";

function ClientComponent() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Cliente</h2>
      {user === "client" && (
        <div>
          Perico
          <ExerciseListComponent />
          {/* <FavExerciseComponent /> */}
        </div>
      )}
    </div>
  );
}

export default ClientComponent;
