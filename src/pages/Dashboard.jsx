import React from "react";
import ExerciseList from "../components/ExerciseList"; // Ajusta la ruta según la ubicación real del archivo

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ExerciseList /> {/* Renderiza el componente ExerciseList aquí */}
      {/* Otros componentes y contenido */}
    </div>
  );
}

export default Dashboard;
