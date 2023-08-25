export const toggleFavoriteExercise = async (idExercise, isFavorite) => {
  try {
    const response = await fetch(
      `/api/exercises/favoriteExercises/${idExercise}`,
      {
        method: isFavorite ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const message = isFavorite
        ? "Ejercicio eliminado de favoritos"
        : "Ejercicio añadido a favoritos";
      return { success: true, message };
    } else {
      return { success: false, message: "Error al realizar la acción" };
    }
  } catch (error) {
    return { success: false, message: "Error de red" };
  }
};
