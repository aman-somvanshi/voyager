import React from 'react';
// import flightData from './flightData'; // Assuming flightData.js is in the same directory

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
  ];


function FlightList() {
  return (
    <div>
      <h2>Available Flights</h2>
      <ul>
        {allFlightsList.map((flight, index) => (
          <li key={index}>
            From: {flight.fromCity} to {flight.toCity} | Date: {flight.deptDate} | Departure: {flight.departureTime} | Arrival: {flight.landingTime} | Price: ₹{flight.price} ({flight.airlineName} - {flight.flightTime})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightList;