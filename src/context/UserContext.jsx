import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const sessionData = JSON.parse(localStorage.getItem("session"));
    return {
      token: sessionData?.token || null,
    };
  });

  const setUserAndStorage = (loginUser) => {
    setUser(loginUser);
    if (loginUser && loginUser.token) {
      localStorage.setItem(
        "session",
        JSON.stringify({ token: loginUser.token })
      );
    } else {
      localStorage.removeItem("session");
    }
  };

  return (
    <UserContext.Provider value={{ user, setUserAndStorage }}>
      {children}
    </UserContext.Provider>
  );
};

// Exporta useUser como una función
export const useUser = () => useContext(UserContext);
