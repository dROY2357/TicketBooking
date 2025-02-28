import React, { useState } from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HomePage from "./pages/Homepage/Homepage";
import BookingPage from "./pages/BookingPage/BookingPage";
import "./App.css";

const App = () => {
  return (
    <div>
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <HomePage /> */}
      <BookingPage />
    </div>
  );
};

export default App;
