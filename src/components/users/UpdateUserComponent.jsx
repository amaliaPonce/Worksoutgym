import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { updateUserService } from "../../service/index";
import useUser from "../../hooks/useUser";
import Button from "../Button";

function EditProfile() {
  const { user, login } = useContext(AppContext);
  const { user: userData, loading, error } = useUser(user.userId);
  const [formData, setFormData] = useState({
    name: userData.name || "",
    biography: userData.biography || "",
    lastName: userData.lastName || "",
    birthDate: userData.birthDate || "",
    address: userData.address || "",
    phone_number: userData.phone_number || "",
    photo: userData.photo || "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await updateUserService(user.token, formData);

      login({ ...user, user: updatedUser });
      alert("Perfil actualizado con éxito.");
    } catch (error) {
      alert("Error al actualizar el perfil.");
      console.error("Error al actualizar el perfil:", error.message);
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Editar Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Biografía:</label>
          <input
            type="text"
            name="biography"
            value={formData.biography}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Apellidos:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fecha de cumpleaños:</label>
          <input
            type="text"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Foto:</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />
          {formData.photo && (
            <img
              src={URL.createObjectURL(formData.photo)}
              alt="Foto de perfil"
              style={{ maxWidth: "200px" }}
            />
          )}
        </div>

        <Button handleClick={handleSubmit} type="submit">
          Guardar Cambios
        </Button>
      </form>
    </div>
  );
}

export default EditProfile;
