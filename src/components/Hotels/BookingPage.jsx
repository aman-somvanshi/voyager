import React, { useContext, useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './BookingPage.css';
import { SearchContext } from '../Hotels/SearchContext';
import { useAuth } from '../../auth/authContext';

const BookingPage = () => {
  const {user} = useAuth();
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const hotelName = location.state?.hotelName || 'Hotel Details';
  const { checkInDate, checkOutDate, guests, selectedHotelImage } = useContext(SearchContext); // Access selectedHotelImage
  const [bookingData, setBookingData] = useState({});
  const [loading, setLoading] = useState(true);

  const [bookingName, setBookingName] = useState(user?.name || '');
  const [bookingEmail, setBookingEmail] = useState(user?.email || '');

  const formatDateForInput = (date) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const checkInFormatted = formatDateForInput(checkInDate);
  const checkOutFormatted = formatDateForInput(checkOutDate);

  const handleBooking = async (e) => {
    e.preventDefault();
  
    const hotelId = id;
    try {
      const response = await fetch(`http://localhost:3001/hotelBooking/${hotelId}`);
      if (!response.ok) throw new Error("Hotel data not found");
  
      const hotelData = await response.json();
      const existingBookings = hotelData.bookings || {};
  
      // Generate all dates between checkIn and checkOut (exclusive of checkout)
      const datesToBook = [];
      
      const current = new Date(checkInDate);
      const end = new Date(checkOutDate);

      // Force time to 00:00:00 to avoid timezone shifts
      current.setHours(0, 0, 0, 0);
      end.setHours(0, 0, 0, 0);

      while (current < end) {
        const dateStr = current.toLocaleDateString('en-CA'); // 'YYYY-MM-DD' in local time
        datesToBook.push(dateStr);
        current.setDate(current.getDate() + 1);
      }
  
      // Check availability
      console.log(datesToBook);
      for (const date of datesToBook) {
        const booked = existingBookings[date] || 0;
        if (booked >= hotelData.totalRooms) {
          alert(`No rooms available on ${date}. Please choose different dates.`);
          return;
        }
      }
  
      // Update bookings
      const updatedBookings = { ...existingBookings };
      for (const date of datesToBook) {
        updatedBookings[date] = (updatedBookings[date] || 0) + 1;
      }
  
      // PATCH updated bookings
      await fetch(`http://localhost:3001/hotelBooking/${hotelId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookings: updatedBookings }),
      });
  
      navigate('/thankyou');
    } catch (error) {
      console.error("Booking failed", error);
      alert("Booking could not be completed.");
    }
  };
  
  

  return (
    <div className="booking-page-container">
      <div className="booking-form-left">
        <h1 className="hname">Booking for {hotelName}</h1>
        <p>Please fill in your booking details below:</p>

        <form className="booking-form">
          <div className="form-group">
            <label htmlFor="checkInDate">Check-in Date:</label>
            <input
              type="date"
              id="checkInDate"
              name="checkInDate"
              defaultValue={checkInFormatted}
            />
          </div>

          <div className="form-group">
            <label htmlFor="checkOutDate">Check-out Date:</label>
            <input
              type="date"
              id="checkOutDate"
              name="checkOutDate"
              defaultValue={checkOutFormatted}
            />
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" min="1" defaultValue={guests} />
          </div>

          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" value={bookingName} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" value={bookingEmail} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <button type="submit" className="submit-booking-button" onClick={handleBooking}>
            Confirm Booking
          </button>
        </form>
      </div>
      <div className="booking-image-right">
        {selectedHotelImage && <img src={selectedHotelImage} alt={hotelName} className="hotel-image" />}
      </div>
    </div>
  );
};

export default BookingPage;