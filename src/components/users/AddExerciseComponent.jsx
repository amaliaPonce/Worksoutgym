import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";

function AddExercise() {
  const [ejercicio, setEjercicio] = useState({
    name: "",
    description: "",
    muscleGroup: "", // Valor inicial vacío
  });

  const [photo, setPhoto] = useState(null);
  const { user } = useContext(AppContext);

  useEffect(() => {
    const headers = {
      Authorization: ` ${user.token}`,
    };

    const postExercise = async () => {
      try {
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
        } else {
          console.error("Error al agregar el ejercicio");
        }
      } catch (error) {
        console.error("Error de red", error);
      }
    };

    if (ejercicio.name && ejercicio.description && ejercicio.muscleGroup && photo) {
      postExercise();
    }
  }, [user, ejercicio, photo]);

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
      <form>
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
        <button type="submit">Agregar Ejercicio</button>
      </form>
    </div>
  );
}

export default AddExercise;
