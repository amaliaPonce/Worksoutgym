export const getUserDataService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const registerService = async (name, email, password) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND}/users/register`,
      {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
  } catch (error) {
    throw new Error("Error en el registro: " + error.message);
  }
};

export const loginServise = async (body) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND}/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
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

export const ExercisesService = async (userToken) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/exercises/listExercises`,
    {
      method: "GET",
      headers: {
        Authorization: ` ${userToken}`,
      },
    }
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
export const filterExercisesService = async (
  userToken,
  name,
  muscleGroup,
  favorite,
  recommended
) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND}/exercises/filterExercises/`,
      {
        method: "POST",
        headers: {
          Authorization: ` ${userToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(name, muscleGroup, favorite, recommended),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.message);
    }

    return json.data;
  } catch (error) {
    return { status: "error", message: "Error de red" };
  }
};

export const infoExercisesService = async (id, userToken) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/exercises/infoExercise/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: ` ${userToken}`,
      },
    }
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const MarkRecommendedService = async (
  idExercise,
  isRecommended,
  user
) => {
  try {
    const url = `${process.env.REACT_APP_BACKEND}/exercises/recommendedExercise/?idExercise=${idExercise}`;

    const headers = {
      Authorization: ` ${user.token}`,
    };

    const method = isRecommended ? "POST" : "POST";

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

export const markFavoriteService = async (idExercise, isFavorite, user) => {
  try {
    const url = `${process.env.REACT_APP_BACKEND}/exercises/favoriteExercise/?idExercise=${idExercise}`;
    const headers = {
      Authorization: `${user.token}`,
    };

    const method = isFavorite ? "POST" : "POST";

    const response = await fetch(url, {
      method,
      headers,
    });

    if (response.ok) {
      const message = isFavorite
        ? "Ejercicio marcado como favorito"
        : "Ejercicio desmarcado como favorito";
      return { success: true, message };
    } else {
      return { success: false, message: "Error al realizar la acción" };
    }
  } catch (error) {
    return { success: false, message: "Error de red" };
  }
};

export const AddExerciseService = async (userToken, formData) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND}/exercises/newExercise`,
      {
        method: "POST",
        headers: {
          Authorization: ` ${userToken}`,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return await response.json();
    }
  } catch (error) {
    console.error('Ha habido un problema con las operaciones fetch ' + error.message);
  }
};

export const deleteExerciseService = async (exerciseId, userToken) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/exercises/deleteExercise/${exerciseId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: ` ${userToken}`,
      },
    }
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
export const updateExerciseService = async (
  exerciseId,
  userToken,
  exerciseData
) => {
  const formData = new FormData();

  if (exerciseData.id !== null && exerciseData.id !== undefined) {
    formData.append("id", exerciseData.id);
  }

  if (exerciseData.name !== null && exerciseData.name !== undefined) {
    formData.append("name", exerciseData.name);
  }

  if (
    exerciseData.description !== null &&
    exerciseData.description !== undefined
  ) {
    formData.append("description", exerciseData.description);
  }

  if (
    exerciseData.muscleGroup !== null &&
    exerciseData.muscleGroup !== undefined
  ) {
    formData.append("muscleGroup", exerciseData.muscleGroup);
  }

  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/exercises/updateExerciseController/${exerciseId}`,
    {
      method: "PUT",
      headers: {
        Authorization: `${userToken}`,
      },
      body: formData,
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const FavoriteExercisesService = async (user) => {
  try {
    const url = `${process.env.REACT_APP_BACKEND}/exercises/favorite`;

    const headers = {
      Authorization: ` ${user.token}`,
    };

    const response = await fetch(url, {
      method: "POST",
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

export const updateUserService = async (userid, usertoken, userData) => {
  const formData = new FormData();
  formData.append("name", userData.name);
  formData.append("biography", userData.biography);
  formData.append("lastName", userData.lastName);
  formData.append("birthDate", userData.birthDate);
  formData.append("address", userData.address);
  formData.append("phone_number", userData.phone_number);
  if (userData.photo) {
    formData.append("photo", userData.photo);
  }

  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/users/profile/${userid}`,
    {
      method: "PUT",
      headers: {
        Authorization: ` ${usertoken}`,
      },
      body: formData,
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const updateRolUserService = async (id, usertoken) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/users/updateUserRole/${id}`,

    {
      method: "PUT",
      headers: {
        Authorization: ` ${usertoken}`,
      },
    }
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
export const listUsersService = async (usertoken) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/users/listUsers/`,
    {
      method: "POST",
      headers: {
        Authorization: ` ${usertoken}`,
      },
    }
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
export const getUserService = async (id, usertoken) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/users/profile/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: ` ${usertoken}`,
      },
    }
  );
  const json = await response.json();
  console.log(id, usertoken);
  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
