import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { updateUserService, getUserService } from "../../service";
import UserPostComponent from "./UserPostComponent";
import Button from "../Button";

function InfoUserComponent() {
  const { user } = useContext(AppContext);
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
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
    // Obtener los datos del usuario al cargar el componente
    const fetchUserData = async () => {
      try {
        if (!user || !user.token) {
          throw new Error("Debes iniciar sesión para editar el perfil.");
        }

        const fetchedUserData = await getUserService(id || user.id, user.token);

        if (fetchedUserData.id === user.id) {
          setEditMode(true);
        }

        setUserData(fetchedUserData);
        setLoading(false);
      } catch (error) {
        setMessage(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user, id]);

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

  if (!userData) {
    return <p>Error: Usuario no encontrado.</p>;
  }

  return (
    <section>
      {message && <p>{message}</p>}
      <section>
        <h2>Detalles del Usuario</h2>
        <UserPostComponent user={userData} />
        {user.id === userData.id && (
          <Button handleClick={() => setEditMode(true)}>Editar perfil</Button>
        )}
      </section>
      {editMode ? (
        <section>
          <h3>Formulario de edición</h3>
          <form onSubmit={handleUpdateProfile}>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={userProfileData.name}
              onChange={handleChange}
              required
            />
            <label>Biografía:</label>
            <input
              type="text"
              name="biography"
              value={userProfileData.biography}
              onChange={handleChange}
            />
            <label>Apellidos:</label>
            <input
              type="text"
              name="lastName"
              value={userProfileData.lastName}
              onChange={handleChange}
            />
            <label>Fecha de cumpleaños:</label>
            <input
              type="text"
              name="birthDate"
              value={userProfileData.birthDate}
              onChange={handleChange}
            />
            <label>Dirección:</label>
            <input
              type="text"
              name="address"
              value={userProfileData.address}
              onChange={handleChange}
            />
            <label>Teléfono:</label>
            <input
              type="text"
              name="phone_number"
              value={userProfileData.phone_number}
              onChange={handleChange}
            />
            <label>Foto:</label>
            <input type="file" name="photo" onChange={handleFileChange} />
            {userProfileData.photo && (
              <img
                src={URL.createObjectURL(userProfileData.photo)}
                alt="Foto de perfil"
                style={{ maxWidth: "200px" }}
              />
            )}
            <Button handleClick={handleUpdateProfile} type="submit">
              Guardar Cambios
            </Button>
          </form>
        </section>
      ) : null}
    </section>
  );
}

export default InfoUserComponent;
