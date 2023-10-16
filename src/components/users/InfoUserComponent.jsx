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
  const { userInfo, error, loading, refetchUser } = useUser(id || user.id, user.token);
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
      const user = userInfo[0];
      setUserData(user);
      setUserProfileData({
        name: user.name,
        biography: user.biography,
        lastName: user.lastName,
        birthDate: formatDate(user.birthDate), // Formatear fecha aquí
        address: user.address,
        phone_number: user.phone_number,
      });
    }
  }, [userInfo]);

  // Función para formatear la fecha de nacimiento (YYYY-MM-DD)
  const formatDate = (date) => {
    const formattedDate = new Date(date).toISOString().split('T')[0];
    return formattedDate;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Formatear la fecha de cumpleaños al formato deseado (YYYY-MM-DD)
    if (name === "birthDate") {
      setUserProfileData((prevUserData) => ({
        ...prevUserData,
        [name]: formatDate(value),
      }));
    } else {
      setUserProfileData((prevUserData) => ({
        ...prevUserData,
        [name]: value,
      }));
    }
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
      refetchUser();
    } catch (error) {
      setMessage("Error al actualizar el perfil.");
      console.error("Error al actualizar el perfil:", error.message);
    }
  };

  const handleToggleEditMode = () => {
    setEditMode(!editMode);
    setMessage("");
  };

  if (loading) {
    return <p>Cargando información del usuario...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <article className="user-page-container">
      <article className="user-container">
        <article className="info-exercise custom">
          {message && <p>{message}</p>}
          <h2>Detalles del Usuario</h2>
          <UserPostComponent user={userData} />
          {user.id === userData.id && (
            <section className="button-container">
              <Button handleClick={handleToggleEditMode}>
                {editMode ? "Cancelar Edición" : "Editar perfil"}
              </Button>
            </section>
          )}
          {editMode ? (
            <fieldset className="add-exercise-container">
              <legend>Formulario de edición</legend>
              <form className="add-exercise-form" onSubmit={handleUpdateProfile}>
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
                <label htmlFor="birthDate" className="add-exercise-label">
                  Fecha de cumpleaños (YYYY-MM-DD):
                </label>
                <input
                  className="add-exercise-input"
                  type="text"
                  name="birthDate"
                  value={userProfileData.birthDate}
                  onChange={handleChange}
                  placeholder="YYYY-MM-DD"
                  required
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
                <section className="button-container">
                  <Button
                    handleClick={handleUpdateProfile}
                    type="submit"
                    className={`buttons`}
                  >
                    Guardar Cambios
                  </Button>
                </section>
              </form>
            </fieldset>
          ) : null}
        </article>
      </article>
    </article>
  );
}

export default InfoUserComponent;
