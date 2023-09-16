import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import UserPostComponent from "../users/UserPostComponent";
import { listUsersService } from "../../service/index";
import UpdateUserRole from "./UpdateUserRol";
import Button from "../Button";
import { useTheme } from "../../context/ThemeContext";

function UserList() {
  const { user } = useContext(AppContext);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isUserRoleFormVisible, setIsUserRoleFormVisible] = useState(false);
  const theme = useTheme();

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
    setIsUserRoleFormVisible(true);
  };

  return (
    <section className={`user-list-container ${theme}`}>
      <h3 className={`user-list-title ${theme}`}>Lista de Usuarios</h3>
      {error && <p className={`user-list-error ${theme}`}>Error: {error}</p>}
      <ul className={`user-container ${theme}`}>
        {users.map((userItem) => (
          <li className={`user-card ${theme}`} key={userItem.id}>
            <UserPostComponent user={userItem} />

            <Button
              handleClick={() => handleToggleUserRoleForm(userItem.id)}
              className={`buttons ${theme}`}
            >
              Cambiar Rol
            </Button>
          </li>
        ))}
      </ul>

      {isUserRoleFormVisible && selectedUserId && (
        <UpdateUserRole userId={selectedUserId} />
      )}
    </section>
  );
}

export default UserList;
