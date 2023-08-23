import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState();

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    };
    loadData();
  }, [url]);

  return data;
}

export default useFetch;
