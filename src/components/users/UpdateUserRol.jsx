import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { updateRolUserService } from "../../service/index";
import Button from "../Button";
import useUser from "../../hooks/useUser";

function UpdateUserRole({ userId, userRole }) {
  const { user } = useContext(AppContext);
  const { userInfo } = useUser(userId, user.token);

  const [formData, setFormData] = useState({
    userId: userId || "",
    userRole: userRole || "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setFormData({
      userId: userInfo.id,
      userRole: userInfo.userRole,
    });
  }, [userInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    try {
      await updateRolUserService(
        formData.userId,
        user.token,
        formData.userRole
      );
      setSuccessMessage("Rol actualizado exitosamente.");
    } catch (error) {
      setErrorMessage("Error al actualizar el rol.");
      console.error("Error al actualizar el rol:", error.message);
    }
  };

  return (
    <div className="user-details">
      <h2>Editar Rol de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-details">
          <label>Usuario ID:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="user-details">
          <label>Nuevo Rol:</label>
          <select
            name="userRole"
            value={formData.userRole}
            onChange={handleChange}
          >
            <option value="cliente">Cliente</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        <Button handleClick={handleSubmit} type="submit">
          Guardar Cambios
        </Button>
      </form>
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>Error: {errorMessage}</div>}
    </div>
  );
}

export default UpdateUserRole;
