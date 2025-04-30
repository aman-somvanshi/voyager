import React from 'react';
import { useLocation } from 'react-router-dom';
import FlightCard from './FlightCard';
import Transport from '../home/Transport';
import SearchBar from '../home/Searchbar';

const response = await fetch("http://localhost:3000/flightData");
const flights = await response.json();

function FlightList() { 
  const location = useLocation();
  const { state } = location;

  const { fromCity, toCity, departureDate, returnDate } = state || {};

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

  const filteredFlights = flights.filter((flight) => {
    console.log(flight.destinationCityCity == toCity);
    
    const matchesFromCity = !fromCity || flight.originCity.toLowerCase() == fromCity.toLowerCase();
    const matchesToCity = !toCity || flight.destinationCity.toLowerCase() == toCity.toLowerCase();
    const matchesDepartureDate = !departureDate || formatDateForComparison(flight.departureDate) == formatDateForComparison(departureDate);
    
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
    <>
      <div style={{ position:"relative"}}>
        <Transport/>
        </div>
       <div style={{ position:"relative",marginTop:"2rem"}}>
        <SearchBar />
        </div>
        <div style={{marginTop: "2rem", marginBottom : "4rem"}}>
        {filteredFlights.map((flight) => (
            <FlightCard key={flight.id} flightData={flight} />
        ))}
        </div>
    </>
  );
}

export default FlightList;