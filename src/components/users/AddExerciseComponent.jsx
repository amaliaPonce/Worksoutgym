import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
//import { AddExerciseService } from '../../service/index';
import Button from "../Button";
import "../../styles/dashboard/exercisePage.css";

function AddExercise({ addExercise }) {
  const { user } = useContext(AppContext);

  const initialFormState = {
    name: "",
    description: "",
    muscleGroup: "",
    photo: null,
  };

  // Estados.
  const [formState, setFormState] = useState(initialFormState);
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Apertura/cierre del formulario.
  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  // Agregar un ejercicio.
  const handleAddExercise = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      // Validación del formulario.
      if (
        !formState.name ||
        !formState.description ||
        !formState.muscleGroup ||
        !formState.photo
      ) {
        setError("Por favor, completa todos los campos.");
        setLoading(false);
        return;
      }

      // Enviamos los datos con formData.
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("description", formState.description);
      formData.append("muscleGroup", formState.muscleGroup);
      formData.append("photo", formState.photo);

      // Comprobación de usuario y token.
      if (user && user.token) {
        const result = await addExercise(user.token, formData);
        if (result && result.status === "ok") {
          console.log("Ejercicio agregado exitosamente");
          setAdded(true);
          setFormState(initialFormState);
        } else {
          console.error(
            "Error al agregar el ejercicio:",
            result.error || "Error desconocido"
          );
          setError(
            "No se pudo agregar el ejercicio. Por favor, inténtalo de nuevo más tarde."
          );
        }
      } else {
        console.error("Token de usuario no válido");
        setError(
          "No se pudo agregar el ejercicio. Por favor, inicia sesión nuevamente."
        );
      }
    } catch (error) {
      console.error("Error de red:", error);
      setError(
        "Se produjo un error inesperado. Por favor, inténtalo de nuevo más tarde."
      );
    } finally {
      setLoading(false);
    }
  };

  // Manejamos los cambios del formulario.
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;

    setFormState({
      ...formState,
      [name]: newValue,
    });
  };

  return (
    <section className="add-exercise-container">
      <Button className={`buttons`} handleClick={handleToggleForm}>
        {isFormOpen ? "Cerrar Formulario" : "Añadir Ejercicio"}
      </Button>
      {isFormOpen && (
        <form className="add-exercise-form" onSubmit={handleAddExercise}>
          {error && <p className="error-message">{error}</p>}
          <fieldset>
            {/* Campos del formulario */}
            <legend>Datos del Ejercicio</legend>
            <label htmlFor="name" className="add-exercise-label">
              Nombre:
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                className="add-exercise-input"
                required
              />
            </label>
            <label htmlFor="description" className="add-exercise-label">
              Descripción:
              <textarea
                id="description"
                name="description"
                value={formState.description}
                onChange={handleInputChange}
                className="add-exercise-textarea"
                required
              ></textarea>
            </label>
            <label htmlFor="muscleGroup" className="add-exercise-label">
              Grupo Muscular:
              <select
                id="muscleGroup"
                name="muscleGroup"
                value={formState.muscleGroup}
                onChange={handleInputChange}
                className="add-exercise-select"
                required
              >
                <option value="">Seleccionar</option>
                <option value="Tren superior">Tren superior</option>
                <option value="Tren inferior">Tren inferior</option>
                <option value="Core">Core</option>
                <option value="Full body">Full body</option>
              </select>
            </label>
            <label htmlFor="photo" className="add-exercise-label">
              Foto:
              <input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                onChange={handleInputChange}
                className="add-exercise-file-input"
                required
              />
            </label>
          </fieldset>
          {added ? (
            <p className="success-message">Ejercicio agregado con éxito.</p>
          ) : (
            <Button
              handleClick={handleAddExercise}
              type="submit"
              disabled={loading}
              className={`buttons`}
            >
              {loading ? "Agregando..." : "Agregar Ejercicio"}
            </Button>
          )}
        </form>
      )}
    </section>
  );
}

export default AddExercise;
