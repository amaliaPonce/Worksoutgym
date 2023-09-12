import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { updateUserService } from "../../service/index";
import Button from "../Button";

function EditProfile() {
  const { user, login } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: "",
    biography: "",
    lastName: "",
    birthDate: "",
    address: "",
    phone_number: "",
    photo: null,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await updateUserService(user.userId, user.token);
        setFormData({
          name: userData.name || "",
          biography: userData.biography || "",
          lastName: userData.lastName || "",
          birthDate: userData.birthDate || "",
          address: userData.address || "",
          phone_number: userData.phone_number || "",
          photo: null,
        });
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };
    fetchUserData();
  }, [user.userId, user.token]);

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
      const updatedUser = await updateUserService(
        user.userId,
        user.token,
        formData
      );

      login({ ...user, user: updatedUser });

      alert("Perfil actualizado con éxito.");
    } catch (error) {
      alert("Error al actualizar el perfil.");
      console.error("Error al actualizar el perfil:", error.message);
    }
  };
  return (
    <div className="user-card">
      <h2>Editar Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-title">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="user-details">
          <label>Biografía:</label>
          <input
            type="text"
            name="biography"
            value={formData.biography}
            onChange={handleChange}
          />
        </div>
        <div className="user-details">
          <label>Apellidos:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="user-details">
          <label>Fecha de cumpleaños:</label>
          <input
            type="text"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </div>
        <div className="user-details">
          <label>Dirección:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="user-details">
          <label>Teléfono:</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
        <div className="user-image">
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
