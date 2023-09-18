import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { updateUserService } from "../../service";
import UserPostComponent from "./UserPostComponent";
import Button from "../Button";
import useUser from "../../hooks/useUser";

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
    photo: null,
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

  const handleFileChange = (e) => {
    setUserProfileData({
      ...userProfileData,
      photo: e.target.files[0],
    });
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

  if (loading) {
    return <p>Cargando información del usuario...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section className="info-exercise">
      {message && <p>{message}</p>}
      <section>
        <h2>Detalles del Usuario</h2>
        <UserPostComponent user={userData} />
        {user.id === userData.id && (
          <Button handleClick={() => setEditMode(true)}>Editar perfil</Button>
        )}
      </section>
      {editMode ? (
        <section className="add-exercise-container">
          <h3>Formulario de edición</h3>
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
            <label htmlFor="photo" className="add-exercise-label">
              Foto:
            </label>
            <input
              type="file"
              name="photo"
              className="add-exercise-file-input"
              onChange={handleFileChange}
            />
            {userProfileData.photo && (
              <img
                src={URL.createObjectURL(userProfileData.photo)}
                alt="Foto de perfil"
                style={{ maxWidth: "200px" }}
              />
            )}
            <Button
              handleClick={handleUpdateProfile}
              type="submit"
              className={`buttons`}
            >
              Guardar Cambios
            </Button>
          </form>
        </section>
      ) : null}
    </section>
  );
}

export default InfoUserComponent;
