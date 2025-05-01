import React from 'react';
import './FlightCard.css';

function FlightCard({ flightData}) {
  const calculateArrivalTime = () => {
    const [hours, minutes] = flightData.departureTime.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + flightData.duration;
    const arrivalHours = Math.floor(totalMinutes / 60) % 24;
    const arrivalMinutes = totalMinutes % 60;
    const formattedHours = String(arrivalHours).padStart(2, '0');
    const formattedMinutes = String(arrivalMinutes).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  };
  const calculateReturnArrivalTime = () => {
    const [hours, minutes] = flightData.returnDepartureTime.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + flightData.returnDuration;
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
        <div >
        <span className="flight-number">{flightData.flightNumber}</span><br/>
        <span className="flight-number">{flightData.returnFlightNumber}</span>
        </div>
      </div>
      <div className="departure-time">
        <span style={{marginLeft : "5px"}}>{flightData.departureDate}</span>
      </div>
      <div className="departure-info">
        <div>
          <span className="departure-time">{flightData.departureTime}</span>
          <span className="airport-code" style={{marginLeft : "5px"}}>{flightData.originCode}</span>
        </div>
        <div>
          <span className="departure-time">{flightData.returnDepartureTime}</span>
          <span className="airport-code" style={{marginLeft : "5px"}}>{flightData.destinationCode}</span>
        </div>
      </div>

      <div className="duration-info">
        <span className="duration">{flightData.formattedDuration}</span>
      </div>

      <div className="duration-info"  >
      <span className="stops">{flightData.stops === 0 ? 'Non-stop' : `${flightData.stops} Stop${flightData.stops > 1 ? 's' : ''}`}</span><br />
      <span className="stops">{flightData.returnStops === 0 ? 'Non-stop' : `${flightData.stops} Stop${flightData.stops > 1 ? 's' : ''}`}</span>
      </div>

      <div className="arrival-info">
        <div>
          <span className="arrival-time">{calculateArrivalTime()}</span>
          <span className="airport-code" style={{marginLeft : "5px"}}>{flightData.destinationCode}</span>
          {flightData.nextDay && <span className="next-day">(+1 day)</span>}
        </div>
        <div>
          <span className="arrival-time">{calculateReturnArrivalTime()}</span>
          <span className="airport-code" style={{marginLeft : "5px"}}>{flightData.originCode}</span>
          {flightData.returnNextDay && <span className="next-day">(+1 day)</span>}
        </div>
      </div>
      <div className="departure-time">
        <span style={{marginLeft : "5px"}}>{flightData.returnFlightDate}</span>
      </div>
      <div className="price-info">
        <span className="price">₹{flightData.totalPrice}</span>
        {flightData.discount > 0 && <span className="discount">Extra ₹{flightData.discount} Off</span>}
      </div>

      <div className="booking-actions">
        <button className="book-button">Book</button>
      </div>
    </div>
  );
}

export default FlightCard;