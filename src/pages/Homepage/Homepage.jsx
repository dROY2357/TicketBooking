import React from "react";
import styled from "./Homepage.module.css";
import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  // Handle form submission
  const handleSubmit = (event) => {};
  const handleChange = (e) => {};

  return (
    <>
      <Navbar />
      <div className={styled.homepage}>
        <h2>Book Your Train Ticket</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="from">From</label>
            <input type="text" id="from" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="to">To</label>
            <input type="text" id="to" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" onChange={handleChange} required />
          </div>
          <button type="submit">Search Trains</button>
        </form>
      </div>
    </>
  );
};

export default HomePage;
