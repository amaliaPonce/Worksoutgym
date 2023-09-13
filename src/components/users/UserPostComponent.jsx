import React, { useState } from "react";
import Button from "../Button";
import UpdateUserComponent from "../users/UpdateUserComponent";
import UpdateUserRole from "../users/UpdateUserRol";

const UserPostComponent = ({ user }) => {
  const [isEditProfileVisible, setIsEditProfileVisible] = useState(false);
  const [isUserRoleFormVisible, setIsUserRoleFormVisible] = useState(false);

  const handleToggleEditProfile = (userId) => {
    setIsEditProfileVisible(!isEditProfileVisible);
  };

  const handleToggleUserRoleForm = (userId) => {
    setIsUserRoleFormVisible(!isUserRoleFormVisible);
  };

  return (
    <div className="user-card">
      <div className="user-image">
        <img
          src={`${process.env.REACT_APP_BACKEND}/uploads/${user.photo}`}
          alt={user.name}
        />
      </div>
      <div className="user-details">
        <p className="user-title">
          <strong>Nombre:</strong> {user.name}
        </p>
        <p className="user-details">
          <strong>Biografía:</strong> {user.biography}
        </p>
        <p className="user-details">
          <strong>Apellido:</strong> {user.lastName}
        </p>
        <p className="user-details">
          <strong>Fecha de Nacimiento:</strong> {user.birthDate}
        </p>
        <p className="user-details">
          <strong>Dirección:</strong> {user.address}
        </p>
        <p className="user-details">
          <strong>Número de Teléfono:</strong> {user.phone_number}
        </p>
      </div>
      <div>
        <Button handleClick={() => handleToggleEditProfile(user.id)}>
          Editar Perfil
        </Button>
        {isEditProfileVisible && <UpdateUserComponent userId={user.id} />}
      </div>
      {user?.userRole === "admin" && (
        <div>
          <h3>Cambiar Rol</h3>
          <Button handleClick={() => handleToggleUserRoleForm(user.id)}>
            Cambiar Rol
          </Button>
        </div>
      )}
      {isUserRoleFormVisible && (
        <UpdateUserRole userId={user.id} userRole={user.userRole} />
      )}
    </div>
  );
};

export default UserPostComponent;
