// src/components/HotelCard.jsx
import React, { useContext } from 'react';
import './HotelCard.css';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../Hotels/SearchContext'; // Ensure correct path

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate(); // Initialize navigate
  const { setSelectedHotelImage } = useContext(SearchContext); // Access the setter function

  const handleBookNowClick = () => {
    setSelectedHotelImage(hotel.imageUrl); // Store the image URL in the context
    navigate(`/booking/${hotel.id}`, { state: { hotelName: hotel.name, hotelImage: hotel.imageUrl } });
  };
  
  return (
    <div className="hotel-card-container">
      <div className="hotel-image-container">
        <img src={hotel.imageUrl} alt={hotel.name} className="hotel-image" />
      </div>
      <div className="hotel-details-container">
        <div className="hotel-info">
          <h3 className="hotel-name">{hotel.name}</h3>
          <p className="hotel-location">{hotel.location}</p>
          <p className="hotel-price">Price: ${hotel.price}</p>
        </div>
        <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
      </div>
    </div>
  );
};

export default HotelCard;