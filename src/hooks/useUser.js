import { useEffect, useState } from "react";
import { getUserService } from "../service/index";

const useUser = (id, token) => {
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUser = async (id, token) => {
    try {
      setLoading(true);
      const data = await getUserService(id, token);
      setUserInfo(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(id, token);
  }, [id, token]);

  const refetchUser = () => {
    fetchUser(id, token);
  };

  return { userInfo, error, loading, refetchUser };
};

export default useUser;
