export const postExercise = async (ejercicio) => {
  try {
    const response = await fetch("/exercises", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ejercicio),
    });

    if (!response.ok) {
      const errorMessage = `Error en la solicitud: ${response.status} ${response.statusText}`;
      throw new Error(errorMessage);
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error;
  }
};
