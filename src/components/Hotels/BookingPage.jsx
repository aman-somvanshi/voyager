// src/components/BookingPage.jsx
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './BookingPage.css'; // You can create a CSS file for this page

const BookingPage = () => {
  const { id } = useParams(); // Get the hotel ID from the URL parameter
  const location = useLocation(); // Get the state passed from the previous page
  const hotelName = location.state?.hotelName || 'Hotel Details'; // Access the hotel name from the state
  // In a real application, you would fetch the detailed hotel information
  // using the hotel ID here.
  return (
    <>
    <img href="Hotel1.jpeg"/>
   
    <div className="booking-page-container">
      <h1 className="hname">Booking for {hotelName}</h1>
      <p>Please fill in your booking details below:</p>

      <form className="booking-form">
        <div className="form-group">
          <label htmlFor="checkInDate">Check-in Date:</label>
          <input type="date" id="checkInDate" name="checkInDate" />
        </div>

        <div className="form-group">
          <label htmlFor="checkOutDate">Check-out Date:</label>
          <input type="date" id="checkOutDate" name="checkOutDate" />
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests:</label>
          <input type="number" id="guests" name="guests" min="1" defaultValue="1" />
        </div>

        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" />
        </div>

        <button type="submit" className="submit-booking-button">
          Confirm Booking
        </button>
      </form>
    </div>
    </>
  );
};

export default BookingPage;