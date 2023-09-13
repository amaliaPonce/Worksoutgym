import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { updateExerciseService } from "../../service/index";
import Button from "../Button";

function UpdateExerciseComponent() {
  const { user } = useContext(AppContext);
  const [exerciseData, setExerciseData] = useState({
    id: "",
    name: "",
    description: "",
    muscleGroup: "",
    photo: null,
  });
  const [message, setMessage] = useState("");
  const [currentExerciseData, setCurrentExerciseData] = useState(null);

  useEffect(() => {
    // Verificar si exerciseData.id tiene un valor válido antes de cargar los datos del ejercicio
    if (exerciseData.id) {
      const loadCurrentExerciseData = async () => {
        try {
          const currentExercise = await updateExerciseService(
            exerciseData.id,
            user.token
          );

          setCurrentExerciseData(currentExercise);
          setExerciseData(currentExercise || {});
        } catch (error) {
          setMessage("Error al obtener los datos del ejercicio.");
          console.error(
            "Error al obtener los datos del ejercicio:",
            error.message
          );
        }
      };

      loadCurrentExerciseData();
    }
  }, [exerciseData.id, user.token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (exerciseData[name] !== value) {
      setExerciseData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e) => {
    setExerciseData({
      ...exerciseData,
      photo: e.target.files[0],
    });
  };

  const handleUpdateExercise = async (e) => {
    e.preventDefault();

    if (!exerciseData.muscleGroup) {
      setMessage("El campo Grupo Muscular es obligatorio.");
      return;
    }

    try {
      const updatedExerciseData = {
        id: exerciseData.id,
      };

      if (exerciseData.name) {
        updatedExerciseData.name = exerciseData.name;
      }

      if (exerciseData.description) {
        updatedExerciseData.description = exerciseData.description;
      }

      if (exerciseData.photo) {
        updatedExerciseData.photo = exerciseData.photo;
      }

      if (exerciseData.muscleGroup) {
        updatedExerciseData.muscleGroup = exerciseData.muscleGroup;
      }

      const response = await updateExerciseService(
        exerciseData.id,
        user.token,
        updatedExerciseData
      );

      setMessage("Ejercicio actualizado con éxito");

      setExerciseData((prevExerciseData) => ({
        ...prevExerciseData,
        ...response,
      }));
    } catch (error) {
      setMessage("Error al actualizar el ejercicio.");
      console.error("Error al actualizar el ejercicio:", error.message);
    }
  };

  return (
    <div>
      <h2>Actualizar Ejercicio</h2>
      {message && <p>{message}</p>}
      {currentExerciseData && (
        <div>
          <h3>Datos actuales del ejercicio:</h3>
          <p>ID: {currentExerciseData.id}</p>
          <p>Nombre: {currentExerciseData.name}</p>
          <p>Descripción: {currentExerciseData.description}</p>
          <p>Grupo Muscular: {currentExerciseData.muscleGroup}</p>
        </div>
      )}
      <form onSubmit={handleUpdateExercise}>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={exerciseData.id || ""}
          onChange={handleChange}
        />
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={exerciseData.name || ""}
          onChange={handleChange}
        />
        <label>Descripción:</label>
        <input
          type="text"
          name="description"
          value={exerciseData.description || ""}
          onChange={handleChange}
        />
        <label>Grupo Muscular:</label>
        <select
          name="muscleGroup"
          value={exerciseData.muscleGroup || ""}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar</option>
          <option value="Tren superior">Tren superior</option>
          <option value="Tren inferior">Tren inferior</option>
          <option value="Core">Core</option>
          <option value="Full Body">Full Body</option>
        </select>
        <label>Foto:</label>
        <input type="file" name="photo" onChange={handleFileChange} />
        <Button handleClick={handleUpdateExercise} type="submit">
          Actualizar Ejercicio
        </Button>
      </form>
    </div>
  );
}

export default UpdateExerciseComponent;
