import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import UserPostComponent from "../users/UserPostComponent";
import { listUsersService, updateUserService } from "../../service/index";
import UpdateUserRole from "../../components/users/UpdateUserRol"
import UpdateUserComponent from "../../components/users/UpdateUserComponent"

function UserList() {
  const { user } = useContext(AppContext);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isEditProfileVisible, setIsEditProfileVisible] = useState(false);
  const [isUserRoleFormVisible, setIsUserRoleFormVisible] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        if (!user || !user.token) {
          throw new Error("Debes iniciar sesión para listar usuarios");
        }

        const userList = await listUsersService(user.token);
        console.log("lista de usuarios from", userList);
        setUsers(userList);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    loadUsers();
  }, [user]);

  const handleToggleEditProfile = (userId) => {
    setSelectedUserId(userId);
    setIsEditProfileVisible(!isEditProfileVisible);
  };

  const handleToggleUserRoleForm = (userId) => {
    setSelectedUserId(userId);
    setIsUserRoleFormVisible(!isUserRoleFormVisible);
  };

  const handleUpdateUserRole = async (newUserRole) => {
    try {
      if (!user || !user.token || !selectedUserId) {
        throw new Error("Debes iniciar sesión y seleccionar un usuario");
      }

      // Llamar a la función que actualiza el rol de usuario
      await updateUserService(user.token, selectedUserId, newUserRole);

      // Actualizar la lista de usuarios después de cambiar el rol
      const updatedUserList = await listUsersService(user.token);
      setUsers(updatedUserList);
      setIsUserRoleFormVisible(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <h3>Lista de Usuarios</h3>
      {error && <p>Error: {error}</p>}
      <ul className="user-container">
        {users.map((user) => (
          <li className="user-card" key={user.id}>
            <UserPostComponent
              user={user}
              handleToggleEditProfile={handleToggleEditProfile}
              handleToggleUserRoleForm={handleToggleUserRoleForm}
            />
          </li>
        ))}
      </ul>

      {isEditProfileVisible && selectedUserId && (
        <UpdateUserComponent userId={selectedUserId} />
      )}

      {isUserRoleFormVisible && selectedUserId && (
        <UpdateUserRole
          userId={selectedUserId}
          userRole={users.find((u) => u.id === selectedUserId)?.userRole}
          handleUpdateUserRole={handleUpdateUserRole}
        />
      )}
    </section>
  );
}

export default UserList;
