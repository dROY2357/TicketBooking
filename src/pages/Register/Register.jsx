import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Register.module.css"; //Import CSS module

const Register = () => {
  const handleSubmit = async (e) => {};
  const handleChange = async (e) => {};
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.registerContainer}>
        <div className={styles.registerBox}>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
