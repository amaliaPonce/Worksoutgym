import { useEffect, useState } from "react";
import { getUserService } from "../service/index";

const useUser = (id, token) => {
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUser = async () => {
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

    loadUser();
  }, [id, token]);

  return { userInfo, error, loading };
};

export default useUser;
