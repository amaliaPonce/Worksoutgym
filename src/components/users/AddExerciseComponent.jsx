import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

function AddExercise() {
  const [ejercicio, setEjercicio] = useState({
    name: "",
    description: "",
    muscleGroup: "",
  });

  const [photo, setPhoto] = useState(null);
  const { user } = useContext(AppContext);
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddExercise = async (e) => {
    e.preventDefault(); // Previene la recarga de la página

    try {
      setLoading(true);

      const headers = {
        Authorization: `${user.token}`,
      };

      const formData = new FormData();
      formData.append("name", ejercicio.name);
      formData.append("description", ejercicio.description);
      formData.append("muscleGroup", ejercicio.muscleGroup);
      formData.append("photo", photo);

      const response = await fetch("http://localhost:8000/exercises/newExercise", {
        method: "POST",
        headers: headers,
        body: formData,
      });

      if (!response.ok) {
        const errorMessage = `Error en la solicitud: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }

      const responseData = await response.json();
      if (responseData.status === "ok") {
        console.log("Ejercicio agregado exitosamente");
        setAdded(true);
        setTimeout(() => setAdded(false), 3000); // Esto ocultará el mensaje después de 3 segundos
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEjercicio({
      ...ejercicio,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };

  return (
    <div>
      <h2>Agregar Ejercicio de Gimnasio</h2>
      {added ? (
        <div>
          <p>Ejercicio agregado con éxito.</p>
          <Link to="/adminPage">Agregar otro ejercicio</Link>
        </div>
      ) : (
        <div>
          <form onSubmit={handleAddExercise}>
            {error && <p>Error: {error}</p>}
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                value={ejercicio.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Descripción:</label>
              <textarea
                name="description"
                value={ejercicio.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <label>Grupo Muscular:</label>
              <select
                name="muscleGroup"
                value={ejercicio.muscleGroup}
                onChange={handleChange}
              >
                <option value="">Seleccionar</option>
                <option value="Tren-superior">Tren-superior</option>
                <option value="Tren-inferior">Tren-inferior</option>
                <option value="core">core</option>
              </select>
            </div>
            <div>
              <label>Foto:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </div>
            <button type="submit" disabled={loading}>
              Agregar Ejercicio
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddExercise;
