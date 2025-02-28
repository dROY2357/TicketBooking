import React from "react";
import styled from "./Traincard.module.css";

const Traincard = ({ train, date }) => {
  const proceedToBooking = (train, date) => {
    console.log(train, date);
  };
  return (
    <div className={styled.trainCard}>
      <h3>{train.name}</h3>
      <p>
        From: {train.from} To: {train.to}
      </p>
      <p>Departure Time: {train.departureTime}</p>
      <p>Arrival Time: {train.arrivalTime}</p>
      <p>Fare: ₹{train.fare}</p>
      <button onClick={() => proceedToBooking(train, date)}>Book Now</button>
    </div>
  );
};

export default Traincard;
