// components/AdminDashboard.js
import React from "react";
import { useAuth } from "../context/AuthContext";
import { AuthProvider } from "../context/AuthContext";
import ExerciseListComponent from "../components/ExerciseListComponent";
import FavExerciseComponent from "../components/FavExerciseComponent";

function AdminComponent() {
  const { user } = useAuth();

  return (
    <AuthProvider>
      <div>
        <h2>Admin</h2>
        {user && user.role === "admin" && (
          <div>
            {/* Añadir aqui las funciones a las que tiene acceso el admin */}
            <ExerciseListComponent />
            <FavExerciseComponent />
          </div>
        )}
      </div>
    </AuthProvider>
  );
}

export default AdminComponent;
