import React from "react";
import "../../styles/dashboard/exercisePage.css";

const UserPostComponent = ({ user }) => {
  return (
    <section className="exercise-card">
      <section className="exercise-image">
        {user && user.photo && (
          <img
            src={`${process.env.REACT_APP_BACKEND}/uploads/${user.photo}`}
            alt={user.name}
          />
        )}
      </section>
      <section className="exercise-details">
        <p className="exercise-title">
          <strong>Nombre:</strong> {user ? user.name : ""}
        </p>
        <p className="exercise-title">
          <strong>Apellido:</strong> {user ? user.lastName : ""}
        </p>
        <p className="exercise-title">
          <strong>Fecha de Nacimiento:</strong> {user ? user.birthDate : ""}
        </p>
        <p className="exercise-title">
          <strong>Dirección:</strong> {user ? user.address : ""}
        </p>
        <p className="exercise-title">
          <strong>Teléfono:</strong> {user ? user.phone_number : ""}
        </p>
        <p className="exercise-title">
          <strong>Biografía:</strong> {user ? user.biography : ""}
        </p>
      </section>
    </section>
  );
};

export default UserPostComponent;
