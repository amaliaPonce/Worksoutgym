import { useState, useEffect } from "react";
import { listUsersService } from "../service/index";

export const useUserList = (userToken) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const data = await listUsersService(userToken);
        console.log("Datos recibidos:", data);
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (userToken) {
      loadUsers();
    }
  }, [userToken]);

  return { users, error, loading };
};

export default useUserList;
