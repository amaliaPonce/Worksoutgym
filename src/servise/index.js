export const loginService = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND}/ruta-de-login`
    );
    if (!response.ok) {
      const json = await response.json();
      throw new Error(json.message);
    }
    const json = await response.json();
    return json.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
