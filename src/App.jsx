import React, { useState } from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HomePage from "./pages/Homepage/Homepage";
import BookingPage from "./pages/BookingPage/BookingPage";
import { AuthProvider } from "./contexts/AuthContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/booking", element: <BookingPage /> },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
