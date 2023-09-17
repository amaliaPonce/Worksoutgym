import React from "react";

const UserPostComponent = ({ user }) => {
  return (
    <section className={`user-card `}>
      <section className="user-image">
        {user && user.photo && (
          <img
            src={`${process.env.REACT_APP_BACKEND}/uploads/${user.photo}`}
            alt={user.name}
          />
        )}
      </section>
      <section className={`user-details `}>
        <p className={`user-title `}>
          <strong>Nombre:</strong> {user ? user.name : ""}
        </p>
        <p className={`user-title `}>
          <strong>Apellido:</strong> {user ? user.lastName : ""}
        </p>
        <p className={`user-title `}>
          <strong>Fecha de Nacimiento:</strong> {user ? user.birthDate : ""}
        </p>
        <p className={`user-title `}>
          <strong>Dirección:</strong> {user ? user.address : ""}
        </p>
        <p className={`user-title `}>
          <strong>Teléfono:</strong> {user ? user.phone_number : ""}
        </p>
        <p className={`user-title `}>
          <strong>Biografía:</strong> {user ? user.biography : ""}
        </p>
      </section>
    </section>
  );
};

export default UserPostComponent;
