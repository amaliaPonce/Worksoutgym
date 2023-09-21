import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { updateUserService, getUserService } from "../../service/index";
import Button from "../Button";
import useUser from "../../hooks/useUser";

function EditProfile() {
  const { user, login } = useContext(AppContext);
  const { userInfo } = useUser(user.id, user.token);
  const [userData, setUserData] = useState(userInfo[0]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!user || !user.token) {
          throw new Error("Debes iniciar sesión para editar el perfil.");
        }

        const userData = await getUserService(user.id, user.token);
        setUserData(userData);
        setLoading(false);
      } catch (error) {
        setMessage(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (!userData.name) {
      setMessage("El campo Nombre es obligatorio.");
      return;
    }

    try {
      const updatedUser = await updateUserService(
        user.userId,
        user.token,
        userData
      );

      setMessage("Perfil actualizado con éxito.");
      login({ ...user, user: updatedUser });
    } catch (error) {
      setMessage("Error al actualizar el perfil.");
      console.error("Error al actualizar el perfil:", error.message);
    }
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <section className="exercise-details">
      <h2>Editar Perfil</h2>
      {message && <p>{message}</p>}
  
      <form onSubmit={handleUpdateProfile}>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
        <label>Biografía:</label>
        <input
          type="text"
          name="biography"
          value={userData.biography}
          onChange={handleChange}
        />
        <label>Apellidos:</label>
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
        />
        <label>Fecha de cumpleaños:</label>
        <input
          type="text"
          name="birthDate"
          value={userData.birthDate}
          onChange={handleChange}
        />
        <label>Dirección:</label>
        <input
          type="text"
          name="address"
          value={userData.address}
          onChange={handleChange}
        />
        <label>Teléfono:</label>
        <input
          type="text"
          name="phone_number"
          value={userData.phone_number}
          onChange={handleChange}
        />
        <Button
          handleClick={handleUpdateProfile}
          type="submit"
          className={`buttons`}
        >
          Guardar Cambios
        </Button>
      </form>
    </section>
  );
}

export default EditProfile;
