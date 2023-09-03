import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        
        // Verifica si la respuesta es una matriz o un objeto iterable
        if (Array.isArray(responseData) || typeof responseData[Symbol.iterator] === 'function') {
          setData(responseData);
        } else {
          throw new Error("Response data is not iterable");
        }
        
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
