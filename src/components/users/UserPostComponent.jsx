import React from "react";
import { useTheme } from "../../context/ThemeContext";

const UserPostComponent = ({ user }) => {
  const theme = useTheme();

  return (
    <section className={`user-card ${theme}`}>
      <section className="user-image">
        {user && user.photo && (
          <img
            src={`${process.env.REACT_APP_BACKEND}/uploads/${user.photo}`}
            alt={user.name}
          />
        )}
      </section>
      <section className={`user-details ${theme}`}>
        <p className={`user-title ${theme}`}>
          <strong>Nombre:</strong> {user ? user.name : ""}
        </p>
        <p className={`user-title ${theme}`}>
          <strong>Apellido:</strong> {user ? user.lastName : ""}
        </p>
        <p className={`user-title ${theme}`}>
          <strong>Fecha de Nacimiento:</strong> {user ? user.birthDate : ""}
        </p>
        <p className={`user-title ${theme}`}>
          <strong>Dirección:</strong> {user ? user.address : ""}
        </p>
        <p className={`user-title ${theme}`}>
          <strong>Teléfono:</strong> {user ? user.phone_number : ""}
        </p>
        <p className={`user-title ${theme}`}>
          <strong>Biografía:</strong> {user ? user.biography : ""}
        </p>
      </section>
    </section>
  );
};

export default UserPostComponent;
