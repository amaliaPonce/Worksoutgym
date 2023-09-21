import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import UserPostComponent from "../users/UserPostComponent";
import UpdateUserRole from "./UpdateUserRol";
import Button from "../Button";
import useUserList from "../../hooks/UseUserList";

function ListUserComponent() {
  const { user } = useContext(AppContext);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isUserRoleFormVisible, setIsUserRoleFormVisible] = useState(false);
  const { users, error, updateUserRole } = useUserList(user);

  const handleToggleUserRoleForm = (userId) => {
    setSelectedUserId(userId);
    setIsUserRoleFormVisible(!isUserRoleFormVisible); // Alternar la visibilidad
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
              className={"buttons"}
            >
              {isUserRoleFormVisible ? "Cerrar Formulario" : "Cambiar Rol"}
            </Button>
            {isUserRoleFormVisible && selectedUserId === userItem.id && (
              <div>
                <UpdateUserRole
                  user={user}
                  userId={selectedUserId}
                  updateUserRole={updateUserRole}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListUserComponent;
