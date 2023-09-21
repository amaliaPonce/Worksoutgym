import { useState, useEffect } from "react";
import { listUsersService, updateRolUserService } from "../service/index";

export const useUserList = (user) => {
  console.log(user);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        if (!user || !user.token) {
          throw new Error("Debes iniciar sesión para listar usuarios");
        }
        const userList = await listUsersService(user.token);
        setUsers(userList);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, [user]);
 
  const updateUserRole = async (data) => {
    try {
      console.log(data);
      setLoading(true);
      await updateRolUserService(data, user.token);
      const newUserList = await listUsersService(user.token);
      setUsers(newUserList);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { users, error, loading, updateUserRole };
};
export default useUserList;