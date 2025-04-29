// src/components/HotelCard.jsx
import React from 'react';
import './HotelCard.css';

const HotelCard = ({ hotel }) => {
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
                <button className="book-now-button">Book Now</button>
            </div>
        </div>
    );
};

export default HotelCard;