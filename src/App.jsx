import React, { useState } from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HomePage from "./pages/Homepage/Homepage";
import BookingPage from "./pages/BookingPage/BookingPage";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Login />
      {/* <Register /> */}
      {/* <HomePage /> */}
      {/* <BookingPage /> */}
    </AuthProvider>
  );
};

export default App;
