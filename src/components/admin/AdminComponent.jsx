import React from "react";
import Accordion from "../Accordion";
import ExercisePage from "../../pages/ExercisePage";

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
