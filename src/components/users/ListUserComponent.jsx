import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import UserPostComponent from "../users/UserPostComponent";
import UpdateUserRole from "./UpdateUserRole";
import Button from "../Button";
import useUserList from "../../hooks/UseUserList";

function ListUserComponent() {
  const { user } = useContext(AppContext);

  // Estado para el ID de usuario y visibilidad del formulario.
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isUserRoleFormVisible, setIsUserRoleFormVisible] = useState(false);

  // Obtener la lista de usuarios.
  const { users, error, updateUserRole } = useUserList(user);

  const handleToggleUserRoleForm = (userId) => {
    setSelectedUserId(userId);
    setIsUserRoleFormVisible(!isUserRoleFormVisible);
  };

  return (
    <section>
      {error && <p>Error: {error}</p>}
      <ul className="exercise-container">
        {users.map((userItem) => (
          <li className="exercise-card" key={userItem.id}>
            <UserPostComponent user={userItem} />
            <Button
              handleClick={() => handleToggleUserRoleForm(userItem.id)}
              className={`buttons`}
            >
              {isUserRoleFormVisible ? "Cerrar Formulario" : "Cambiar Rol"}
            </Button>
            {isUserRoleFormVisible && selectedUserId === userItem.id && (
              <>
                <UpdateUserRole
                  user={user}
                  userId={selectedUserId}
                  updateUserRole={updateUserRole}
                />
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListUserComponent;
