import React, { useState } from "react";
import Button from "../Button";
import UpdateUserComponent from "../users/UpdateUserComponent";
import UpdateUserRole from "../users/UpdateUserRol";

const UserPostComponent = ({ user }) => {
  const [isEditProfileVisible, setIsEditProfileVisible] = useState(false);
  const [isUserRoleFormVisible, setIsUserRoleFormVisible] = useState(false);

  const handleToggleEditProfile = () => {
    setIsEditProfileVisible(!isEditProfileVisible);
  };

  const handleToggleUserRoleForm = () => {
    setIsUserRoleFormVisible(!isUserRoleFormVisible);
  };

  return (
    <div className="user-card">
      <div className="user-image">
        {user && user.photo && (
          <img
            src={`${process.env.REACT_APP_BACKEND}/uploads/${user.photo}`}
            alt={user.name}
          />
        )}
      </div>
      <div className="user-details">
        <p className="user-title">
          <strong>Nombre:</strong> {user ? user.name : ""}
        </p>
        <p className="user-details">
          <strong>Biografía:</strong> {user ? user.biography : ""}
        </p>
        <p className="user-details">
          <strong>Apellido:</strong> {user ? user.lastName : ""}
        </p>
        <p className="user-details">
          <strong>Fecha de Nacimiento:</strong> {user ? user.birthDate : ""}
        </p>
        <p className="user-details">
          <strong>Dirección:</strong> {user ? user.address : ""}
        </p>
        <p className="user-details">
          <strong>Número de Teléfono:</strong> {user ? user.phone_number : ""}
        </p>
      </div>
      <div>
        <Button handleClick={handleToggleEditProfile}>Editar Perfil</Button>
        {isEditProfileVisible && <UpdateUserComponent userId={user.id} />}
      </div>
      {user?.userRole === "admin" && (
        <div>
          <h3>Cambiar Rol</h3>
          <Button handleClick={handleToggleUserRoleForm}>Cambiar Rol</Button>
        </div>
      )}
      {isUserRoleFormVisible && (
        <UpdateUserRole userId={user.id} userRole={user.userRole} />
      )}
    </div>
  );
};

export default UserPostComponent;
