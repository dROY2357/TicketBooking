import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import useForm from "../../hooks/useForm";
import styles from "./BookingPage.module.css";
import { useLocation } from "react-router-dom";
import {
  getFirestore,
  doc,
  updateDoc,
  getDoc,
  setDoc,
  arrayUnion,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "../../config/firebaseConf";

const BookingPage = () => {
  const location = useLocation();
  const trainInfo = location.state.train;
  const [formData, handleChange] = useForm({
    name: trainInfo.name,
    from: trainInfo.from,
    to: trainInfo.to,
    fare: trainInfo.fare,
    passengers: 1,
  });

  const [message, setMessage] = useState(""); //State to manage form submit result message

  const db = getFirestore();
  const auth = getAuth(app);
  const user = auth.currentUser;
  console.log("current user", auth.currentUser);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setMessage("User is not authenticated. Please log in.");
      return;
    }

    try {
      const booking = {
        bookingId: `b${Date.now()}`,
        date: location.state.date,
        ...formData,
      };

      const userDocRef = doc(db, "users", user.uid);

      // Check if the document exists
      const userDocSnap = await getDoc(userDocRef);
      if (!userDocSnap.exists()) {
        // Create a new user document if it doesn't exist
        await setDoc(userDocRef, { bookings: [booking] });
      } else {
        // Update the existing document
        await updateDoc(userDocRef, {
          bookings: arrayUnion(booking),
        });
      }

      setMessage("Booking saved successfully!");
    } catch (error) {
      console.error("Error saving booking: ", error);
      setMessage("Failed to save booking.");
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.bookingContainer}>
        <div className={styles.bookingBox}>
          <h2>Booking Details</h2>
          {message && <p className={styles.message}>{message}</p>}
          <form onSubmit={handleBookingSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Train Name</label>
              <input
                type="text"
                id="name"
                readOnly
                value={formData.name}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="from">From</label>
              <input
                type="text"
                id="from"
                readOnly
                value={formData.from}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="to">To</label>
              <input
                type="text"
                id="to"
                readOnly
                value={formData.to}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                id="amount"
                value={formData.fare * formData.passengers}
                required
                readOnly
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="passengers">No. of Passengers</label>
              <input
                type="number"
                id="passengers"
                max="8"
                min="1"
                value={formData.passengers}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Save Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
