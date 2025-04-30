import React from 'react';
import { useLocation } from 'react-router-dom';
import FlightCard from './FlightCard';
import Transport from '../home/Transport';
import SearchBar from '../home/Searchbar';
import ReturnFlightCard from './ReturnFlightCard';
const response = await fetch("http://localhost:3000/flightData");
const flights = await response.json();

const returnResponse = await fetch("http://localhost:3000/returnFlightData");
const returnFlights = await returnResponse.json();

function FlightList() { 
  const location = useLocation();
  const { state } = location;

  const { fromCity, toCity, departureDate, returnDate, Travellers } = state || {};

  let returnFilteredFlights;
  let filteredFlights;

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

  const formatDateForDisplay = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString(); 
    } catch (error) {
      return 'Invalid Date';
    }
  };
  
  if(!returnDate)
  {
     filteredFlights = flights.filter((flight) => {

      const matchesFromCity = !fromCity || flight.originCity.toLowerCase() == fromCity.toLowerCase();
      const matchesToCity = !toCity || flight.destinationCity.toLowerCase() == toCity.toLowerCase();
      const matchesDepartureDate = !departureDate || formatDateForComparison(flight.departureDate) == formatDateForComparison(departureDate);
      
      return matchesFromCity && matchesToCity && matchesDepartureDate;
    });
  }
  else{
    returnFilteredFlights = returnFlights.filter((flight) => {
    
    // console.log(flight.returnFlightDate == returnDate);
    const matchesFromCity = !fromCity || flight.originCity.toLowerCase() == fromCity.toLowerCase();
    const matchesToCity = !toCity || flight.destinationCity.toLowerCase() == toCity.toLowerCase();
    const matchesDepartureDate = !departureDate || formatDateForComparison(flight.departureDate) == formatDateForComparison(departureDate);
    const matchesReturnDate = !returnDate || formatDateForComparison(flight.returnFlightDate) == formatDateForComparison(returnDate);
    // matchesFromCity && matchesToCity && matchesDepartureDate && matchesReturnDate
    return true;
  });
  }
  return (
    <>
      <div style={{ position:"relative"}}>
        <Transport text={"Flight Booking"}/>
        </div>
       <div style={{ position:"relative",marginTop:"2rem"}}>
        <SearchBar />
        </div>
        <div style={{marginTop: "2rem", marginBottom : "4rem"}}>
          {!returnDate && <span>
          {filteredFlights.map((flight) => (
              <FlightCard key={flight.id} flightData={flight} />
          ))}</span>}
          {returnDate && <span>
          {returnFilteredFlights.map((flight) => (
              <ReturnFlightCard key={flight.id} flightData={flight} />
          ))}</span>}
        </div>
    </>
  );
}

export default FlightList;