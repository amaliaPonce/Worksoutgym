// Conexión con el backend
export const post = async (url, body) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      // Manejo de errores de red
      throw new Error(
        `Error en la solicitud: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Manejo de errores generales
    throw new Error(`Error en la solicitud: ${error.message}`);
  }
};
