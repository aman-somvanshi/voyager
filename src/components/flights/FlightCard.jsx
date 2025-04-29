import React from 'react';
import './FlightCard.css'; // Make sure this CSS file exists and has the styles

function FlightCard({ flightData }) {
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
        {/* You might want to have a mapping of airline names to logos */}
        {/* <img src={`/logos/${flight.airline.toLowerCase().replace(' ', '-')}.png`} alt={flight.airline} className="airline-logo" /> */}
        <span className="airline-name">{flightData.airline}</span>
        <span className="flight-number">{flightData.flightNumber}</span>
        {flightData.freeMeal && <span className="free-meal-tag">Free Meal</span>}
        {flightData.secondFastest && <span className="second-fastest-tag">2nd Fastest</span>}
        {flightData.recommended && <span className="recommended-tag">Recommended</span>}
      </div>

      <div className="departure-info">
        <span className="departure-time">{flightData.departureTime}</span>
        <span className="airport-code">{flightData.originCode}</span>
      </div>

      <div className="duration-info">
        <span className="duration">{flightData.formattedDuration}</span>
        <span className="stops">{flightData.stops === 0 ? 'Non-stop' : `${flightData.stops} Stop${flightData.stops > 1 ? 's' : ''}`}</span>
      </div>

      <div className="arrival-info">
        <span className="arrival-time">{calculateArrivalTime()}</span>
        <span className="airport-code">{flightData.destinationCode}</span>
        {flightData.nextDay && <span className="next-day">(+1 day)</span>}
      </div>

      <div className="price-info">
        <span className="price">₹{flightData.price}</span>
        {flightData.discount > 0 && <span className="discount">Extra ₹{flightData.discount} Off</span>}
      </div>

      <div className="booking-actions">
        <button className="book-button">Book</button>
        <div className="lock-price">
          <i className="lock-icon">🔒</i> Lock Price @ ₹{flightData.lockPrice}
        </div>
        <button className="flight-details-button">Flight Details </button>
      </div>
    </div>
  );
}

export default FlightCard;