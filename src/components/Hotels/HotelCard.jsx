// src/components/HotelCard.jsx
import React from 'react';
import './HotelCard.css';
import { useNavigate } from 'react-router-dom';
const HotelCard = ({ hotel }) => {
    const navigate = useNavigate(); // Initialize navigate
    const handleBookNowClick = () => {
    // You'll likely want to pass some hotel information to the booking page
    navigate(`/booking/${hotel.id}`, { state: { hotelName: hotel.name } });
  };
    return (
        <div className="hotel-card-container">
            <div className="hotel-image-container">
                <img src={hotel.imageUrl} alt={hotel.name} className="hotel-image"/>
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