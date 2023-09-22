import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import useUser from "../../hooks/useUser";
import Button from "../Button";

function UpdateUserRole({ userId, updateUserRole }) {
  const { user } = useContext(AppContext);
  const { userInfo } = useUser(userId, user.token);

  const [formData, setFormData] = useState({
    userId: userInfo[0]?.id,
    userRole: userInfo[0]?.userRole,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Actualizamos los datos del formulario cuando cambia la información.
  useEffect(() => {
    setFormData({
      userId: userInfo[0]?.id,
      userRole: userInfo[0]?.userRole,
    });
  }, [userInfo]);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    try {
      //  Errores.
      if (formData.userRole === userInfo[0]?.userRole) {
        setErrorMessage("El usuario ya tiene el rol seleccionado.");
      } else {
        await updateUserRole(formData);
        setSuccessMessage("Rol actualizado exitosamente.");
      }
    } catch (error) {
      setErrorMessage(
        "Error al actualizar el rol. Por favor, inténtalo de nuevo más tarde."
      );
      console.error("Error al actualizar el rol:", error.message);
    }
  };

  return (
    <section className="update-user-role">
      <h2>Editar Rol de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Detalles de Usuario</legend>
          <label>
            Usuario ID:
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              disabled
            />
          </label>
          <label>Nuevo Rol:</label>
          <select
            name="userRole"
            value={formData.userRole}
            onChange={handleChange}
          >
            <option value="cliente">Cliente</option>
            <option value="admin">Administrador</option>
          </select>
        </fieldset>
        <Button type="submit" className={`buttons `}>
          Guardar Cambios
        </Button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </section>
  );
}

export default UpdateUserRole;
