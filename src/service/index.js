// Conexiones con el backend
export const loginServise = async (url, body) => {
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

export const ExercisesService = async (userToken) => {
  try {
    const baseUrl = process.env.REACT_APP_BACKEND;
    const relativeUrl = "/exercises/listExercises";
    const url = `${baseUrl}${relativeUrl}`;
    const response = await fetch(url, {
      headers: {
        Authorization: ` ${userToken}`,
      },
    });
    if (!response.ok) {
      throw new Error(
        `Error en la solicitud: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error en la solicitud: ${error.message}`);
  }
};
export const MarkRecommended = async (idExercise, isRecommended, user) => {
  try {
    const baseUrl = process.env.REACT_APP_BACKEND;
    const relativeUrl = `/exercises/recommendedExercise/?idExercise=${idExercise}`;
    const url = `${baseUrl}${relativeUrl}`;

    const headers = {
      Authorization: ` ${user.token}`,
    };

    const method = isRecommended ? "POST" : "DELETE";

    const response = await fetch(url, {
      method,
      headers,
    });

    if (response.ok) {
      const message = isRecommended
        ? "Ejercicio marcado como recomendado"
        : "Ejercicio desmarcado como recomendado";
      return { success: true, message };
    } else {
      return { success: false, message: "Error al realizar la acción" };
    }
  } catch (error) {
    return { success: false, message: "Error de red" };
  }
};
export const markFavorite = async (idExercise, isFavorite, user) => {
  try {
    const baseUrl = process.env.REACT_APP_BACKEND;
    const relativeUrl = `/exercises/favoriteExercise/?idExercise=${idExercise}`;
    const url = `${baseUrl}${relativeUrl}`;

    const headers = {
      Authorization: ` ${user.token}`,
    };

    const method = isFavorite ? "DELETE" : "POST";

    const response = await fetch(url, {
      method,
      headers,
    });

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
export const FavoriteExercises = async (userToken) => {
  try {
    const baseUrl = process.env.REACT_APP_BACKEND_URL;
    const relativeUrl = "/exercises/favorite";
    const url = `${baseUrl}${relativeUrl}`;

    const headers = {
      Authorization: ` ${userToken}`,
    };

    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("No autorizado: Debes iniciar sesión.");
      } else if (response.status === 404) {
        throw new Error("Ejercicios favoritos no encontrados.");
      } else {
        throw new Error(
          "Error de red: " + response.status + " " + response.statusText
        );
      }
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, message: "Error de red" };
  }
};
export const AddExerciseService = async (userToken, formData) => {
  try {
    const baseUrl = process.env.REACT_APP_BACKEND;
    const relativeUrl = "/exercises/newExercise";
    const url = `${baseUrl}${relativeUrl}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: ` ${userToken}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(
        `Error en la solicitud: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error en la solicitud: ${error.message}`);
  }
};
