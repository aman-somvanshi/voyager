import React from 'react';
import FlightCard from './FlightCard';
// import { flightData } from '../../data/flightData';
import SearchBar from '../home/Searchbar';

const response = await fetch("http://localhost:3001/flightData");
const flights = await response.json();
console.log(flights);

function FlightList() {
  return (

    <>
       <div style={{ position:"relative",marginTop:"5rem"}}>
        <SearchBar />
        </div>
        <div style={{marginTop: "2rem"}}>
        {flights.map((flight) => (
            <FlightCard key={flight.id} flightData={flight} />
        ))}
        </div>
    </>
  );
}

export default FlightList;