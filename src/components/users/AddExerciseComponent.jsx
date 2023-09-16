import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "../../styles/addExercise.css";
import { AddExerciseService } from "../../service/index";

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

      const result = await AddExerciseService(user.token, formData);

      if (result.status === "ok") {
        console.log("Ejercicio agregado exitosamente");
        setAdded(true);
        setFormState(initialFormState);
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
    <section>
      <button className="toggle-form-button" onClick={handleToggleForm}>
        {isFormOpen ? "Cerrar Formulario" : "Añadir Ejercicio"}
      </button>

      {isFormOpen && (
        <section>
          <form className="add-exercise-form" onSubmit={handleAddExercise}>
            {error && <p className="error-message">Error: {error}</p>}
            <fieldset className="form-group">
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
                required
              />
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="description" className="add-exercise-label">
                Descripción:
              </label>
              <textarea
                id="description"
                name="description"
                value={formState.description}
                onChange={handleInputChange}
                className="add-exercise-textarea"
                required
              ></textarea>
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="muscleGroup" className="add-exercise-label">
                Grupo Muscular:
              </label>
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
                <option value="core">Core</option>
                <option value="Full body">Full body</option>
              </select>
            </fieldset>
            <fieldset className="form-group">
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
                required
              />
            </fieldset>
            {added ? (
              <p className="success-message">Ejercicio agregado con éxito.</p>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="add-exercise-button"
              >
                {loading ? "Agregando..." : "Agregar Ejercicio"}
              </button>
            )}
          </form>
        </section>
      )}
    </section>
  );
}

export default AddExercise;
