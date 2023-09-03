import React, { useState } from "react";
import "../../styles/addExercise.css"; 

function AddNewExercise() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [muscleGroup, setMuscleGroup] = useState("");
  const [photo, setPhoto] = useState(null); // Para manejar la imagen del ejercicio
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setPhoto(selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      // Crea un objeto FormData para enviar los datos y la imagen al backend
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("muscleGroup", muscleGroup);
      formData.append("photo", photo);

      const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjkzNzM1ODY2LCJleHAiOjE2OTQzNDA2NjZ9.fD6ZvI_OtDIhFhsiWuazrUSMIltPl5fa_GGSAomipsw"; 
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      const response = await fetch(
        "http://localhost:8000/exercises/newExercise",
        {
          method: "POST",
          headers: headers,
          body: formData, 
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Añadir Nuevo Ejercicio</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="muscleGroup">Grupo Muscular:</label>
          <input
            type="text"
            id="muscleGroup"
            value={muscleGroup}
            onChange={(e) => setMuscleGroup(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="photo">Foto:</label>
          <input
            type="file"
            id="photo"
            accept=".jpg, .jpeg, .png" // Puedes especificar los tipos de archivo permitidos
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar Ejercicio"}
        </button>
      </form>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default AddNewExercise;
