import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import UserPostComponent from "../users/UserPostComponent";
import { listUsersService } from "../../service/index";
import UpdateUserRole from "./UpdateUserRol";
import Button from "../Button";

function UserList() {
  const { user } = useContext(AppContext);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isUserRoleFormVisible, setIsUserRoleFormVisible] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        if (!user || !user.token) {
          throw new Error("Debes iniciar sesión para listar usuarios");
        }

        const userList = await listUsersService(user.token);
        setUsers(userList);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    loadUsers();
  }, [user]);

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
              className={`buttons `}
            >
              {isUserRoleFormVisible ? "Cerrar Formulario" : "Cambiar Rol"}
            </Button>

            {isUserRoleFormVisible && selectedUserId === userItem.id && (
              <div>
                <UpdateUserRole userId={selectedUserId} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UserList;
