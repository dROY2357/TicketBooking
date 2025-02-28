import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import useForm from "../../hooks/useForm";
import styles from "./BookingPage.module.css";
import trainData from "../../data/trainData.json";

const BookingPage = () => {
  const trainInfo = trainData[0];
  const [formData, handleChange] = useForm({
    name: trainInfo.name,
    from: "BLR",
    to: "KOL",
    fare: trainInfo.fare,
    passengers: 1,
  });

  const [message, setMessage] = useState(""); //State to manage form submit result message

  const handleBookingSubmit = async (e) => {};

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
