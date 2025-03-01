import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../contexts/AuthContext";
import useForm from "../../hooks/useForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../config/firebaseConf";
import styles from "./Login.module.css"; // Import CSS Module
import {
  toastSuccess,
  toastError,
  toastInfo,
  ToastContainer,
} from "../../utils/reactToastifyConf";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const [formData, handleChange] = useForm({});
  const auth = getAuth(app);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      // Check if email is verified
      if (user.emailVerified) {
        toastSuccess("Login successful! Welcome.");
        loginUser(user);
        navigate("/");
      } else {
        toastInfo("Please verify your email before logging in.");
      }
    } catch (error) {
      toastError(error.message);
    }
  };
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
      <ToastContainer />
    </div>
  );
};

export default Login;
