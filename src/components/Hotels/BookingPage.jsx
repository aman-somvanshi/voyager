import React, { useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './BookingPage.css';
import { SearchContext } from '../Hotels/SearchContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/authContext';

const BookingPage = () => {
  const {user} = useAuth();
  const { id } = useParams();
  const location = useLocation();
  const hotelName = location.state?.hotelName || 'Hotel Details';
  const { checkInDate, checkOutDate, guests, selectedHotelImage } = useContext(SearchContext); // Access selectedHotelImage
  const navigate = useNavigate();
  const formatDateForInput = (date) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const checkInFormatted = formatDateForInput(checkInDate);
  const checkOutFormatted = formatDateForInput(checkOutDate);

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
            <input type="text" id="name" name="name" value={user?.name || ''} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" value={user?.email || ''}/>
          </div>

          <button type="submit" className="submit-booking-button" onClick={() =>  navigate('/thankyou')}>
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