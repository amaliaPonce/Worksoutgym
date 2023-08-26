export const postExercise = async (ejercicio) => {
  // Exporta la función correctamente
  try {
    const response = await fetch("/exercises", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ejercicio),
    });
    return response; // Retorna la respuesta para manejarla en el componente
  } catch (error) {
    throw error;
  }
};
