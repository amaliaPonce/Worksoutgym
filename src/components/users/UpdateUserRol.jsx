import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import Button from "../Button";
import useUser from "../../hooks/useUser";

function UpdateUserRole({ userId, updateUserRole }) {
  const { user } = useContext(AppContext);
  const { userInfo } = useUser(userId, user.token);
  console.log(userInfo[0]);
  const [formData, setFormData] = useState({
    userId: userInfo[0]?.id,
    userRole: userInfo[0]?.userRole,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setFormData({
      userId: userInfo[0]?.id,
      userRole: userInfo[0]?.userRole,
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
      console.log(formData);
      await updateUserRole(formData);
      setSuccessMessage("Rol actualizado exitosamente.");
    } catch (error) {
      setErrorMessage("Error al actualizar el rol.");
      console.error("Error al actualizar el rol:", error.message);
    }
  };
  return (
    <section className="exercise-details">
      <h2>Editar Rol de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <section className="exercise-details">
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
        </section>
        <section className="exercise-details">
          <label>Nuevo Rol:</label>
          <select
            name="userRole"
            value={formData.userRole}
            onChange={handleChange}
          >
            <option value="cliente">Cliente</option>
            <option value="admin">Administrador</option>
          </select>
        </section>
        <Button type="submit" className={`buttons `}>
          Guardar Cambios
        </Button>
      </form>
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>Error: {errorMessage}</div>}
    </section>
  );
}
export default UpdateUserRole;
