import React, { useState, useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Login.module.css"; // Import CSS Module

const Login = () => {
  const handleLogin = async (e) => {};
  const handleChange = async (e) => {};
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h2>Login</h2>
          <form onSubmit={handleLogin} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" onChange={handleChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
