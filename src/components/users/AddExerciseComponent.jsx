import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import "../../styles/addExercise.css";

function AddExercise() {
  const { user } = useContext(AppContext);

  const initialFormState = {
    name: "",
    description: "",
    muscleGroup: "",
    photo: null,
  };

  const [formState, setFormState] = useState(initialFormState);
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleAddExercise = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("description", formState.description);
      formData.append("muscleGroup", formState.muscleGroup);
      formData.append("photo", formState.photo);

      const response = await fetch(
        "http://localhost:8000/exercises/newExercise",
        {
          method: "POST",
          headers: {
            Authorization: `${user.token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
      }

      const responseData = await response.json();
      if (responseData.status === "ok") {
        console.log("Ejercicio agregado exitosamente");
        setAdded(true);
        setFormState(initialFormState); // Reiniciar el formulario
        setTimeout(() => setAdded(false), 3000);
        window.location.reload(); // Recargar la página después de 3 segundos
      } else {
        console.error("Error al agregar el ejercicio");
      }
    } catch (error) {
      console.error("Error de red", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;

    setFormState({
      ...formState,
      [name]: newValue,
    });
  };

  return (
    <div className="add-exercise-container">
      <button className="toggle-form-button" onClick={handleToggleForm}>
        {isFormOpen ? "Cerrar Formulario" : "Añadir Ejercicio"}
      </button>

      {isFormOpen && (
        <div>
          <form className="add-exercise-form" onSubmit={handleAddExercise}>
            {error && <p className="error-message">Error: {error}</p>}
            <div className="form-group">
              <label htmlFor="name" className="add-exercise-label">
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                className="add-exercise-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description" className="add-exercise-label">
                Descripción:
              </label>
              <textarea
                id="description"
                name="description"
                value={formState.description}
                onChange={handleInputChange}
                className="add-exercise-textarea"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="muscleGroup" className="add-exercise-label">
                Grupo Muscular:
              </label>
              <select
                id="muscleGroup"
                name="muscleGroup"
                value={formState.muscleGroup}
                onChange={handleInputChange}
                className="add-exercise-select"
              >
                <option value="">Seleccionar</option>
                <option value="Tren-superior">Tren-superior</option>
                <option value="Tren-inferior">Tren-inferior</option>
                <option value="core">Core</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="photo" className="add-exercise-label">
                Foto:
              </label>
              <input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                onChange={handleInputChange}
                className="add-exercise-file-input"
              />
            </div>
          </form>
        </div>
      )}

      {added ? (
        <div>
          <p className="success-message">Ejercicio agregado con éxito.</p>
        </div>
      ) : null}

      {isFormOpen && (
        <button
          type="submit"
          disabled={loading}
          className="add-exercise-button"
          onClick={handleAddExercise}
        >
          {loading ? "Agregando..." : "Agregar Ejercicio"}
        </button>
      )}
    </div>
  );
}

export default AddExercise;
