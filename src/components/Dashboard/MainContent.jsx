import React, { useEffect, useState, useContext } from "react";
import HeaderDashboard from "./HeaderDashboard";
import Sidebar from "./Sidebar";
import { ExercisesService } from "../../service/index";
import ExerciseStatsComponent from "../ExerciseStatsComponent";
import { AppContext } from "../../context/AppContext";
import "../../styles/dashboard/main.css";
import { useTheme } from "../../context/ThemeContext";

function MainContent() {
  const { user } = useContext(AppContext);
  const theme = useTheme();

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
    <section className={`app-container ${theme}`}>
      <HeaderDashboard />
      <Sidebar />
      <section className={`content-container ${theme}`}>
        <main className={`main-content ${theme}`}>
          <h2 className={`main-title ${theme}`}>Contenido Principal</h2>
          <p className={`main-description ${theme}`}>
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
