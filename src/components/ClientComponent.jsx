import React from "react";
import { useAuth } from "../context/AuthContext";
import FavExerciseComponent from "../components/FavExerciseComponent";
import ExerciseListComponent from "../components/ExerciseListComponent";
import { AuthProvider } from "../context/AuthContext";

function ClientComponent() {
  const { user } = useAuth();

  return (
    <AuthProvider>
      <div>
        <h2>Cliente</h2>
        {user && user.role === "client" && (
          <div>
            {/* Mostrar funcionalidades para usuarios clientes */}
            <FavExerciseComponent />
            <ExerciseListComponent />
          </div>
        )}
      </div>
    </AuthProvider>
  );
}

export default ClientComponent;
