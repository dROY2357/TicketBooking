import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>Rail Yatra</h1>
      <ul>
        <li>Home</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </nav>
  );
};

export default Navbar;
