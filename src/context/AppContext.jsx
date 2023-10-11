// AppContext.js
import React, { createContext, useEffect, useState } from "react";

// export del contexto
export const AppContext = createContext();

// export del provider del contexto
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("session")));

  useEffect(() => {
    localStorage.setItem("session", JSON.stringify(user));
  }, [user]);

  const login = (loginUser) => {
    setUser(loginUser);
  };

  const logout = () => {
    setUser(null);
  };

  // JSX
  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};
