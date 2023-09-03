import { useEffect, useMemo, useState } from "react";
import { useUser } from "../context/UserContext";

function useFetch(url) {
  const [user] = useUser();
  const [data, setData] = useState();

  const reload = useMemo(
    () => async () => {
      const opts = {};
      if (user) {
        opts.headers = { Authorization: "Bearer " + user.token };
      }
      const res = await fetch(url, opts);
      const json = await res.json();
      setData(json);
    },
    [url, user]
  );

  useEffect(() => {
    reload();

    const t = setInterval(reload, 30000);
    return () => clearInterval(t);
  }, [reload]);

  return { data, reload };
}

export default useFetch;
