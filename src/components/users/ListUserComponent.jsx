import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { listUsersService } from "../../service/index";
import Button from "../Button";
import UserPostComponent from "../users/UserPostComponent";

function UserList() {
  const { user } = useContext(AppContext);

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const handleListUsers = async () => {
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

  return (
    <div>
      <Button handleClick={handleListUsers}>Listar Usuarios</Button>
      {error && <p>Error: {error}</p>}
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <UserPostComponent user={user} />
            </div>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default UserList;
