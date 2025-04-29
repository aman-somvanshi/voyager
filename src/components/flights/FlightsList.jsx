import { useLocation } from 'react-router-dom';
import React from 'react';

function FlightsList() {
  const allFlightsList = [
    {
      fromCity: "Chennai",
      toCity: "Mumbai",
      deptDate: "2025-05-15",
      departureTime: "08:00",
      landingTime: "10:00",
      price: 4500,
      airlineName: "IndiGo",
      flightTime: "2h 0m",
    },
    {
      fromCity: "Delhi",
      toCity: "Bangalore",
      deptDate: "2025-05-20",
      departureTime: "14:30",
      landingTime: "17:00",
      price: 6200,
      airlineName: "SpiceJet",
      flightTime: "2h 30m",
    },
    {
      fromCity: "Kolkata",
      toCity: "Hyderabad",
      deptDate: "2025-06-01",
      departureTime: "11:15",
      landingTime: "13:00",
      price: 5100,
      airlineName: "Air India",
      flightTime: "1h 45m",
    },
    {
      fromCity: "Chennai",
      toCity: "Mumbai",
      deptDate: "2025-05-15",
      departureTime: "12:00",
      landingTime: "14:00",
      price: 5000,
      airlineName: "Vistara",
      flightTime: "2h 0m",
    },
    {
      fromCity: "Chennai",
      toCity: "Mumbai",
      deptDate: "2025-05-18",
      departureTime: "16:00",
      landingTime: "18:00",
      price: 4800,
      airlineName: "IndiGo",
      flightTime: "2h 0m",
    },
  ];

  const location = useLocation();
  const { state } = location;

  const { fromCity, toCity, departureDate } = state || {};

  const formatDateForComparison = (dateString) => {
    try {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    } catch (error) {
      return null;
    }
  };

  const filteredFlights = allFlightsList.filter((flight) => {
    const matchesFromCity = !fromCity || flight.fromCity.toLowerCase() === fromCity.toLowerCase();
    const matchesToCity = !toCity || flight.toCity.toLowerCase() === toCity.toLowerCase();
    const matchesDepartureDate = !departureDate || flight.deptDate === formatDateForComparison(departureDate);

    return matchesFromCity && matchesToCity && matchesDepartureDate;
  });

  const formatDateForDisplay = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString(); 
    } catch (error) {
      return 'Invalid Date';
    }
  };

  return (
    <div style = {{marginTop : "5rem"}}>
      <h2>Available Flights</h2>
      {state ? (
        <div>
          <p>Searching flights from: {fromCity || 'Any'}</p>
          <p>To: {toCity || 'Any'}</p>
          <p>Departure Date: {departureDate ? formatDateForDisplay(departureDate) : 'Any'}</p>
        </div>
      ) : (
        <p>No search criteria provided.</p>
      )}
      {filteredFlights.length > 0 ? (
        <ul>
          {filteredFlights.map((flight, index) => (
            <li key={index}>
              From: {flight.fromCity} to {flight.toCity} | Date: {formatDateForDisplay(flight.deptDate)} | Departure: {flight.departureTime} | Arrival: {flight.landingTime} | Price: ₹{flight.price} ({flight.airlineName} - {flight.flightTime})
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights found matching your criteria.</p>
      )}
    </div>
  );
}

export default FlightsList;