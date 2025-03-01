import React from "react";
import styled from "./Traincard.module.css";
import { useNavigate } from "react-router-dom";

const Traincard = ({ train, date }) => {
  const navigate = useNavigate();
  const proceedToBooking = (train, date) => {
    console.log(train, date);
    navigate("booking", { state: { train, date } });
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
