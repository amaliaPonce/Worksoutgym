import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { updateUserService } from "../../service";
import UserPostComponent from "./UserPostComponent";
import Button from "../Button";
import useUser from "../../hooks/useUser";
import "../../styles/users.css";

function InfoUserComponent() {
  const { user } = useContext(AppContext);
  const { id } = useParams();
  const { userInfo, error, loading } = useUser(id || user.id, user.token);
  const [userData, setUserData] = useState(userInfo[0]);
  const [message, setMessage] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [userProfileData, setUserProfileData] = useState({
    name: "",
    biography: "",
    lastName: "",
    birthDate: "",
    address: "",
    phone_number: "",
  });

  useEffect(() => {
    if (userInfo && userInfo.length > 0) {
      setUserData(userInfo[0]);
    }
  }, [userInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfileData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (!userProfileData.name) {
      setMessage("El campo Nombre es obligatorio.");
      return;
    }

    try {
      await updateUserService(user.id, user.token, userProfileData);

      setMessage("Perfil actualizado con éxito.");
    } catch (error) {
      setMessage("Error al actualizar el perfil.");
      console.error("Error al actualizar el perfil:", error.message);
    }
  };

  const handleToggleEditMode = () => {
    setEditMode(!editMode); // Alternar el modo de edición
    setMessage(""); // Limpiar el mensaje de error o éxito
  };

  if (loading) {
    return <p>Cargando información del usuario...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section className="exercise-page-container">
      <section className="exercise-container">
        <section className="info-exercise custom">
          {message && <p>{message}</p>}
          <section>
            <h2>Detalles del Usuario</h2>
            <UserPostComponent user={userData} />
            {user.id === userData.id && (
              <div className="button-container">
                <Button handleClick={handleToggleEditMode}>
                  {editMode ? "Cancelar Edición" : "Editar perfil"}
                </Button>
              </div>
            )}
          </section>
          {editMode ? (
            <section className="add-exercise-container">
              <h3>Formulario de edición</h3>
              <form
                className="add-exercise-form"
                onSubmit={handleUpdateProfile}
              >
                <label htmlFor="name" className="add-exercise-label">
                  Nombre:
                </label>
                <input
                  className="add-exercise-input"
                  type="text"
                  name="name"
                  value={userProfileData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="biography" className="add-exercise-label">
                  Biografía:
                </label>
                <input
                  className="add-exercise-input"
                  type="text"
                  name="biography"
                  value={userProfileData.biography}
                  onChange={handleChange}
                />
                <label htmlFor="lastName" className="add-exercise-label">
                  Apellidos:
                </label>
                <input
                  className="add-exercise-input"
                  type="text"
                  name="lastName"
                  value={userProfileData.lastName}
                  onChange={handleChange}
                />
                <label htmlFor="birthday" className="add-exercise-label">
                  Fecha de cumpleaños:
                </label>
                <input
                  className="add-exercise-input"
                  type="text"
                  name="birthDate"
                  value={userProfileData.birthDate}
                  onChange={handleChange}
                />
                <label htmlFor="address" className="add-exercise-label">
                  Dirección:
                </label>
                <input
                  className="add-exercise-input"
                  type="text"
                  name="address"
                  value={userProfileData.address}
                  onChange={handleChange}
                />
                <label htmlFor="phone_number" className="add-exercise-label">
                  Teléfono:
                </label>
                <input
                  className="add-exercise-input"
                  type="text"
                  name="phone_number"
                  value={userProfileData.phone_number}
                  onChange={handleChange}
                />
                <div className="button-container">
                  <Button
                    handleClick={handleUpdateProfile}
                    type="submit"
                    className={`buttons`}
                  >
                    Guardar Cambios
                  </Button>
                </div>
              </form>
            </section>
          ) : null}
        </section>
      </section>
    </section>
  );
}

export default InfoUserComponent;
