import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { loggedInUser, logoutUser } = useContext(AuthContext);
  return (
    <nav className={styles.navbar}>
      <h1>Rail Yatra</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!loggedInUser && (
          <>
            <li>
              <Link to="/login"> Login </Link>
            </li>
            <li>
              <Link to="/register"> Register</Link>
            </li>
          </>
        )}
        {loggedInUser && (
          <>
            <li>
              <Link to="/history"> History</Link>
            </li>
            <li>
              <Link onClick={logoutUser} to="/">
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
