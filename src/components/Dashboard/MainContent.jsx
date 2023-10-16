import React, { useEffect, useState, useContext } from "react";
import HeaderDashboard from "./HeaderDashboard";
import Sidebar from "./Sidebar";
import { ExercisesService } from "../../service/index";
import ExerciseStatsComponent from "../ExerciseStatsComponent";
import { AppContext } from "../../context/AppContext";
import "../../styles/dashboard/main.css";
function MainContent() {
  const { user } = useContext(AppContext);

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    async function fetchExercises() {
      try {
        const data = await ExercisesService(user.token);
        setExercises(data);
      } catch (error) {
        console.error("Error al obtener los ejercicios:", error);
      }
    }

    fetchExercises();
  }, [user]);

  return (
    <section className="app-container">
      <HeaderDashboard />
      <Sidebar />
      <section className="content-container">
        <main className="main-content">
          <h2>
            <i className="bx bx-dumbbell"></i> WORKS OUT GYM
            <i className="bx bx-dumbbell"></i>
          </h2>
          <p>
            Bienvenido al panel de administración. Aquí puedes ver estadísticas,
            gestionar usuarios y configurar tu aplicación.
          </p>
          <ExerciseStatsComponent exercises={exercises} />
        </main>
      </section>
    </section>
  );
}

export default MainContent;
