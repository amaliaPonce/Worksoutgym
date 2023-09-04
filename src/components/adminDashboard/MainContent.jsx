import React from "react";
// import Accordion from "../Accordion";
import ExercisePage from "../../pages/ExercisePage";
import AddExerciseComponent from "../users/AddExerciseComponent"

function MainContent() {
  return (
    <main className="main-content">
      <h2>Contenido Principal</h2>
      <p>Bienvenido al panel de administración. Aquí puedes ver estadísticas, gestionar usuarios y configurar tu aplicación.</p>
      <div>
      <h2>Admin</h2>
     
        <ExercisePage /> 
        <AddExerciseComponent />
    
    </div>
    </main>
  );
}

export default MainContent;
