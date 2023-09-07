import { useState, useEffect } from "react";

// Fetch personalizado que recupera los datos del backend usando una variable de entorno y una ruta relativa.

function useFetch(relativeUrl) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const baseUrl = process.env.REACT_APP_BACKEND;
        const url = `${baseUrl}${relativeUrl}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();

        // Verifica si la respuesta es una matriz o un objeto iterable
        if (
          Array.isArray(responseData) ||
          typeof responseData[Symbol.iterator] === "function"
        ) {
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
  }, [relativeUrl]);

  return { data, loading, error };
}

export default useFetch;
