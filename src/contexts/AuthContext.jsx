import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const loginUser = (user) => {
    console.log(`User ${user.uid} logged in successfully!`);
    setLoggedInUser(user);
  };

  const logoutUser = (user) => {
    console.log(`User ${user.uid} logged out successfully!`);
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
