import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import UserPostComponent from "../users/UserPostComponent";
import { listUsersService } from "../../service/index";

function UserList() {
  const { user } = useContext(AppContext);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <section>
      <h3>Lista de Usuarios</h3>
      {error && <p>Error: {error}</p>}
      <ul className="user-container">
        {users.map((user) => (
          <li className="user-card" key={user.id}>
            <UserPostComponent user={user} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UserList;
