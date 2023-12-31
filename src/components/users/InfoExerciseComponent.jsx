import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import useExercise from "../../hooks/useExercise";
import {
  deleteExerciseService,
  updateExerciseService,
} from "../../service/index";
import ExercisePostComponent from "./ExercisePostComponent";
import Button from "../Button";
import "../../styles/dashboard/infoExercise.css";

function InfoExerciseComponent() {
  const { user } = useContext(AppContext);
  const { id } = useParams();
  const { exercise, loading, error, refetch } = useExercise(id, user?.token);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [exerciseData, setExerciseData] = useState({
    id: exercise?.id || "",
    name: exercise?.name || "",
    description: exercise?.description || "",
    muscleGroup: exercise?.muscleGroup || "",
  });

  useEffect(() => {
    setExerciseData({
      id: exercise?.id || "",
      name: exercise?.name || "",
      description: exercise?.description || "",
      muscleGroup: exercise?.muscleGroup || "",
    });
  }, [exercise]);

  const handleDeleteExercise = async () => {
    try {
      await deleteExerciseService(id, user?.token);
      navigate("/usersPage/exercises");
    } catch (error) {
      setErr(error.message);
    }
  };

  const handleUpdateExercise = async () => {
    try {
      await updateExerciseService(id, user?.token, exerciseData);
      console.log("Ejercicio actualizado:", exerciseData);
      setEditMode(false);
      refetch();
    } catch (error) {
      setErr(error.message);
      console.error("Error al actualizar el ejercicio:", error);
    }
  };
  

  if (err) {
    return <p>{err}</p>;
  }

  return (
    <section className="info-exercise">
      {loading ? (
        <p>Cargando información del ejercicio...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : exercise ? (
        <>
          <section>
            <h2>Detalles del Ejercicio</h2>
            <ExercisePostComponent
              exercise={exercise}
              isFavorite={exercise.isFavorite}
              isRecommended={exercise.isRecommended}
            />
            {user?.role === "admin" && (
              <>
                <section className='button-mobile'>
                  <Button
                    handleClick={handleDeleteExercise}
                    className={`buttons`}
                  >
                    Borrar ejercicio
                  </Button>
                  <Button
                    handleClick={() => setEditMode(true)}
                    className={`buttons`}
                  >
                    Editar ejercicio
                  </Button>
                </section>
              </>
            )}
          </section>
          {editMode ? (
            <section>
              <h3>Formulario de edición</h3>
              <fieldset>
                <label htmlFor="id">ID</label>
                <input
                  type="text"
                  value={exerciseData.id}
                  onChange={(e) =>
                    setExerciseData({ ...exerciseData, id: e.target.value })
                  }
                />
              </fieldset>
              <fieldset>
                <label htmlFor="name">Título</label>
                <input
                  type="text"
                  value={exerciseData.name}
                  onChange={(e) =>
                    setExerciseData({ ...exerciseData, name: e.target.value })
                  }
                />
              </fieldset>
              <fieldset>
                <label htmlFor="description">Descripción</label>
                <textarea
                  value={exerciseData.description}
                  onChange={(e) =>
                    setExerciseData({
                      ...exerciseData,
                      description: e.target.value,
                    })
                  }
                />
              </fieldset>
              <fieldset>
                <label htmlFor="muscleGroup">Grupo Muscular</label>
                <select
                  value={exerciseData.muscleGroup}
                  onChange={(e) =>
                    setExerciseData({
                      ...exerciseData,
                      muscleGroup: e.target.value,
                    })
                  }
                >
                  <option value="Tren superior">Tren superior</option>
                  <option value="Tren inferior">Tren inferior</option>
                  <option value="Core">Core</option>
                  <option value="Full Body">Full Body</option>
                </select>
              </fieldset>
              <Button handleClick={handleUpdateExercise} className={`buttons`}>
                Guardar Cambios
              </Button>
            </section>
          ) : null}
        </>
      ) : (
        <p>No se pudo cargar la información del ejercicio.</p>
      )}
    </section>
  );
}

export default InfoExerciseComponent;
