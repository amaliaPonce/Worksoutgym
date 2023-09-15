import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const UserPostComponent = ({ user, handleToggleEditProfile, handleToggleUserRoleForm }) => {
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
     
      </div>
      <div>
        <Button handleClick={() => handleToggleEditProfile(user.id)}>Editar Perfil</Button>
        {user.userRole === "admin" && (
          <div>
            <h3>Cambiar Rol</h3>
            <Button handleClick={() => handleToggleUserRoleForm(user.id)}>Cambiar Rol</Button>
          </div>
        )}

    <Link to={`/adminpage/profileUserPage/ProfileDetails/${user.id}`}>Ver Detalles del Usuario</Link>
      </div>
    </div>
  );
};

export default UserPostComponent;
