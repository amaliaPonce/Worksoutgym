import React from "react";
import { useAuth } from "../context/AuthContext";
import Accordion from "../components/Accordion";
import ExercisePage from "../components/ExerciseListComponent";

function AdminComponent() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Admin</h2>
      {user === "admin" && (
        <Accordion>
          <ExercisePage />
        </Accordion>
      )}
    </div>
  );
}

export default AdminComponent;
