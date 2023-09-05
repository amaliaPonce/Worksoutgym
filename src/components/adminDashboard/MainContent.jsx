import React from "react";
import ExercisePage from "../../pages/ExercisePage";
import AddExerciseComponent from "../users/AddExerciseComponent"
import "../../styles/adminDashboard/adminMain.css"
function MainContent() {
  return (
    <div className="app-container">
    <main className="main-content">
      <h2>Contenido Principal</h2>
      <p>Bienvenido al panel de administración. Aquí puedes ver estadísticas, gestionar usuarios y configurar tu aplicación.</p>
      <div>

        <ExercisePage /> 
        <AddExerciseComponent />
    
    </div>
    </main>
    </div>

  );
}

export default MainContent;
