import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "../../styles/addExercise.css";
import { AddExerciseService } from "../../service/index";
import Button from "../Button";

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

      if (user && user.token) {
        const result = await AddExerciseService(user.token, formData);
        if (result && result.status === "ok") {
          console.log("Ejercicio agregado exitosamente");
          setAdded(true);
          setFormState(initialFormState);
          window.location.reload(); 

        } else if (result && result.status !== "ok") {
          console.error("Error al agregar el ejercicio");
        }
      } else {
        console.error("Token de usuario no válido");
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
    <section className="add-exercise-container">
      <Button className={`buttons`} handleClick={handleToggleForm}>
        {isFormOpen ? "Cerrar Formulario" : "Añadir Ejercicio"}
      </Button>
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
                required
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
                required
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
                required
              >
                <option value="">Seleccionar</option>
                <option value="Tren superior">Tren superior</option>
                <option value="Tren inferior">Tren inferior</option>
                <option value="Core">Core</option>
                <option value="Full body">Full body</option>
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
                required
              />
            </div>
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
        </div>
      )}
    </section>
  );
}

export default AddExercise;
