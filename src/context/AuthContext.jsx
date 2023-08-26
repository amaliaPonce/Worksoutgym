import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext(String);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(String);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
