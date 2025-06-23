import React, { useContext, useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingPage.css';
import { SearchContext } from '../Hotels/SearchContext';
import { useAuth } from '../../auth/authContext';
import { HotelContext } from './HotelContext';

const BookingPage = () => {
  const {user} = useAuth();
  const {hotels} = useContext(HotelContext);
  const location = useLocation();
  const navigate = useNavigate();
  const hotelName = location.state?.hotelName || 'Hotel Details';
  const { checkInDate, checkOutDate, guests, setGuests, selectedHotelImage, hotelId } = useContext(SearchContext);
  const hotelImage = location.state?.hotelImage || selectedHotelImage;
  console.log("Hotel Image:", hotelImage);
  const [checkIn, setCheckIn] = useState(checkInDate || null);
  const [checkOut, setCheckOut] = useState(checkOutDate || null);
  const [bookingName, setBookingName] = useState(user?.name || '');
  const [bookingEmail, setBookingEmail] = useState(user?.email || '');

  const dayDifference = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
  const hotel = hotels.find(h => h.id === hotelId);
  const numRooms = parseInt(guests);
  const totalPrice = hotel.price * numRooms * dayDifference;

  let availableRooms = 0;

  const handleBooking = async (e) => {
    e.preventDefault();

    // === Validation Start ===
    if (!checkIn || !checkOut || !guests || !bookingName || !bookingEmail) {
      alert('Please fill in all the fields.');
      return;
    }

    if (checkOut <= checkIn) {
      alert('Check-out date must be after check-in date.');
      return;
    }

    const maxAllowedDate = new Date();
    maxAllowedDate.setMonth(maxAllowedDate.getMonth() + 3);

    if (checkIn > maxAllowedDate || checkOut > maxAllowedDate) {
      alert('Bookings can only be made up to 3 months in advance.');
      return;
    }

    
    if (dayDifference > 10) {
      alert('Maximum booking duration is 10 days.');
      return;
    }

    if (numRooms < 1 || numRooms > 15) {
      alert('Number of rooms must be between 1 and 15.');
      return;
    }
    // === Validation End ===
    
    try {
      const response = await fetch(`https://voyager-backend-za5b.onrender.com/hotelBooking/${hotelId}`);
      if (!response.ok) throw new Error("Hotel data not found");
  
      const hotelData = await response.json();
      const existingBookings = hotelData.bookings || {};
      const totalRooms = hotelData.totalRooms;
  
      // Generate all dates between checkIn and checkOut (exclusive of checkout)
      const datesToBook = [];
      
      const current = new Date(checkIn);
      const end = new Date(checkOut);

      // Force time to 00:00:00 to avoid timezone shifts
      current.setHours(0, 0, 0, 0);
      end.setHours(0, 0, 0, 0);

      while (current < end) {
        const dateStr = current.toLocaleDateString('en-CA'); // 'YYYY-MM-DD' in local time
        datesToBook.push(dateStr);
        current.setDate(current.getDate() + 1);
      }
  
      // Check availability
      for (const date of datesToBook) {
        const bookedRooms = existingBookings[date] || 0;
        const available = totalRooms - bookedRooms;
        availableRooms = available;
        if (numRooms > available) {
          alert(`Only ${available} room(s) available on ${date}. Please reduce your selection.`);
          return;
        }
      }
  
      // Update bookings
      const updatedBookings = { ...existingBookings };
      for (const date of datesToBook) {
        updatedBookings[date] = (updatedBookings[date] || 0) + numRooms;
      }
  
      // PATCH updated bookings
      await fetch(`https://voyager-backend-za5b.onrender.com/hotelBooking/${hotelId}`, {
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

  console.log("No. of rooms" + guests);
  
  

  return (
    <div className="booking-page-container">
      <div className="booking-form-left">
        <h1 className="hname">Booking for {hotelName}</h1>
        <p>Please fill in your booking details below:</p>

        <form className="booking-form" onSubmit={handleBooking}>
          <div className="form-group">
            <label>Check-in Date:</label>
            <DatePicker
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
              minDate={new Date()}
              maxDate={new Date(new Date().setMonth(new Date().getMonth() + 3))}
              className="date"
              placeholderText="Check-In"
              required
            />
          </div>

          <div className="form-group">
            <label>Check-out Date:</label>
            <DatePicker
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
              minDate={checkIn}
              maxDate={
                checkIn
                  ? new Date(
                      Math.min(
                        new Date(checkIn.getTime() + 10 * 24 * 60 * 60 * 1000).getTime(),
                        new Date(new Date().setMonth(new Date().getMonth() + 3)).getTime()
                      )
                    )
                  : new Date(new Date().setMonth(new Date().getMonth() + 3))
              }
              className="date"
              placeholderText="Check-Out"
              required
            />
          </div>

          <div className="form-group">
            <label>Number of Rooms:</label>
            <input
              type="number"
              min="1"
              max="15"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              required
            />
          </div>

          <div className="form-group">
            <label>Your Name:</label>
            <input
              type="text"
              value={bookingName}
              onChange={(e) => setBookingName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Your Email:</label>
            <input
              type="email"
              value={bookingEmail}
              onChange={(e) => setBookingEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-booking-button"
          disabled={!guests || guests < 1 }>
            Confirm Booking
          </button>
          {!guests || guests < 1 ? (
            <p style={{ color: 'red' }}>
              Please enter a valid number of rooms
            </p>
          ) : null}
        </form>
      </div>
      <div className="booking-image-total-container">
        <div className="booking-image-right" >
          {hotelImage ? ( <img src={hotelImage} alt={hotelName} className="hotel-image" onError={(e) => console.error('Image failed to load :' , e.target.src )} /> )
          : (<p>No image available</p>)}
        </div>
        <div style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '20px' }}>
          Total Cost for {guests} rooms is : ₹{totalPrice}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;