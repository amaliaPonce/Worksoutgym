import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useExercise from "../../hooks/useExercise";
import { AppContext } from "../../context/AppContext";
import { deleteExerciseService } from "../../service/index";
import ExercisePostComponent from "./ExercisePostComponent";
import Button from "../Button";

function InfoExerciseComponent() {
  const { user } = useContext(AppContext);
  const { id } = useParams();
  const { exercise, loading, error } = useExercise(id, user?.token);
  const [err, setErr] = useState();
  const navigate = useNavigate();

  console.log(user)

  const [editMode, setEditMode] = useState(false);

  const handleDeleteExercise = async () => {
    try {
      await deleteExerciseService(id, user?.token);
      navigate("/adminpage/exercises");
    } catch (error) {
      setErr(err.message);
    }
  };
  const handleUpdateExercise = async () => {
    
  };

  if (err) return <p>{err}</p>;

  return (
    <div>
      {loading ? (
        <p>Cargando información del ejercicio...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : exercise ? (
        <>
        <div>
          <h2>Detalles del Ejercicio</h2>
          <ExercisePostComponent
            exercise={exercise}
            isFavorite={exercise.isFavorite}
            isRecommended={exercise.isRecommended}
          />
          {user?.role === "admin" && (
            <>
            <Button handleClick={handleDeleteExercise}>Borrar ejercicio</Button>
            <Button handleClick={() => {setEditMode(true)}}>Editar ejercicio</Button>
            </>
          )}
        </div>
        {editMode ? <form>
          Formulario de edición
          <fieldset>
            <label htmlFor="title">Título</label>
            <input type="text" defaultValue={exercise.name} />
          </fieldset>
        </form> : null}
        </>
      ) : (
        <p>No se pudo cargar la información del ejercicio.</p>
      )}
    </div>
  );
}

export default InfoExerciseComponent;
