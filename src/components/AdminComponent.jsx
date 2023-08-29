import React from "react";
import { useAuth } from "../context/AuthContext";
import Accordion from "../components/Accordion";
import ExerciseListComponent from "../components/ExerciseListComponent";
import FavExerciseComponent from "../components/FavExerciseComponent";
import AddExerciseComponent from "../components/AddExerciseComponent";
function AdminComponent() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Admin</h2>
      {user === "admin" && (
        <Accordion>
          <ExerciseListComponent />
          <AddExerciseComponent />
          <FavExerciseComponent />
        </Accordion>
      )}
    </div>
  );
}

export default AdminComponent;
