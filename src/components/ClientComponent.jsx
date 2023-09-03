import React from "react";
import FavExerciseComponent from "../components/FavExerciseComponent";
import ExerciseListComponent from "../components/admin/ExerciseListComponent";
import { useAuth } from "../context/AuthContext";

function ClientComponent() {
  const { user } = useAuth();

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
