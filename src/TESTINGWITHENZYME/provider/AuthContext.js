import { createContext, useContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLogin] = useState(false);
  //login function
  const login = () => {
    setLogin(true);
  };
  //logout function
  const logout = () => {
    setLogin(false);
  };
  return (
    <AuthContext.Provider value={{ login, isLoggedIn, logout, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
