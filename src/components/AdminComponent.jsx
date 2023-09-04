import React from "react";
import Accordion from "../components/Accordion";
import ExercisePage from "../components/ExerciseListComponent";

function AdminComponent() {
  return (
    <div>
      <h2>Admin</h2>
      <Accordion>
        <ExercisePage />
      </Accordion>
    </div>
  );
}

export default AdminComponent;
