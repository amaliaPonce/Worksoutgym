import React from "react";
import { useAuth } from "../../context/AuthContext";
import Accordion from "../../components/Accordion";
import ExercisePage from "./ExerciseListComponent";
import AddNewExercise from "../admin/AddNewExerciseComponent"

function AdminComponent() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Admin</h2>
      {user === "admin" && (
        <>
        <Accordion>
          <ExercisePage />
        </Accordion>
        </>
        
        
      )}
    </div>
  );
}

export default AdminComponent;
