import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FlightCard.css';
import flightBookingPage from "./FlightBookingPage";

function FlightCard({ flightData}) {
  const navigate = useNavigate();
  function handleBookingClick(){
    navigate('/flight-booking', {state: flightData});
  }

  const calculateArrivalTime = () => {
    const [hours, minutes] = flightData.departureTime.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + flightData.duration;
    const arrivalHours = Math.floor(totalMinutes / 60) % 24;
    const arrivalMinutes = totalMinutes % 60;
    const formattedHours = String(arrivalHours).padStart(2, '0');
    const formattedMinutes = String(arrivalMinutes).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  };

  return (
    <div className="flight-card">
      <div className="airline-info">
        <span className="airline-name">{flightData.airline}</span>
        <span className="flight-number">{flightData.flightNumber}</span>
        {flightData.freeMeal && <span className="free-meal-tag">Free Meal</span>}
        {flightData.recommended && <span className="recommended-tag">Recommended</span>}
      </div>
      <div className="departure-time">
        <span style={{marginLeft : "5px"}}>{flightData.departureDate}</span>
      </div>
      <div className="departure-info">
        <span className="departure-time">{flightData.departureTime}</span>
        <span className="airport-code" style={{marginLeft : "5px"}}>{flightData.originCode}</span>
      </div>

      <div className="duration-info">
        <span className="duration">{flightData.formattedDuration}</span>
      </div>

      <div className="duration-info"  >
      <span className="stops">{flightData.stops === 0 ? 'Non-stop' : `${flightData.stops} Stop${flightData.stops > 1 ? 's' : ''}`}</span>
      </div>

      <div className="arrival-info">
        <span className="arrival-time">{calculateArrivalTime()}</span>
        <span className="airport-code" style={{marginLeft : "5px"}}>{flightData.destinationCode}</span>
        {flightData.nextDay && <span className="next-day">(+1 day)</span>}
      </div>

      <div className="price-info">
        <span className="price">₹{flightData.price}<sub> /person</sub></span>
      </div>

      <div className="booking-actions">
        <button className="book-button" onClick={handleBookingClick}>Book</button>
        <span>{flightData.discount > 0 && <span className="discount">  Extra ₹{flightData.discount} Off</span>}</span>
      </div>
    </div>
  );
}

export default FlightCard;