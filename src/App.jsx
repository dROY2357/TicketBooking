import React, { useState } from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HomePage from "./pages/Homepage/Homepage";
import BookingPage from "./pages/BookingPage/BookingPage";
import BookingHistory from "./pages/BookingHistory/BookingHistory";
import { AuthProvider } from "./contexts/AuthContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "./utils/reactToastifyConf";
import "./App.css";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/booking", element: <BookingPage /> },
    { path: "/history", element: <BookingHistory /> },
  ]);

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ToastContainer />
    </>
  );
};

export default App;
