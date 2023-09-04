import React from "react";
import FavExerciseComponent from "../components/FavExerciseComponent";
import ExerciseListComponent from "../components/admin/ExerciseListComponent";
import { AppProvider } from "../context/AppContext";

function ClientComponent() {
  const { user } = AppProvider();

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
