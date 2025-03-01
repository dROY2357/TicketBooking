import React, { createContext, useState } from "react";
import {
  toastSuccess,
  toastError,
  toastInfo,
} from "../utils/reactToastifyConf";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const loginUser = (user) => {
    setLoggedInUser(user);
  };

  const logoutUser = (user) => {
    toastInfo("You have been logged out.");
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
