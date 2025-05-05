import React, { useState, useEffect, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Searchbar.css';
import QuoteChanger from './QuoteChanger';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SearchFlightContext } from '../flights/SearchFlightContext';
// import {FlightSearchContext} from '../flights/SearchFlightContext';


const SearchBar = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [isOneWayActive, setIsOneWayActive] = useState(true); 
  const [isRoundTripActive, setIsRoundTripActive] = useState(false);
  const [numberOfTravellers, setNumberOfTravellers] = useState('');
  const quotes=["24*7 Customer Support","Hassle-free-Bookings","Best Flights Offers"];
  const navigate = useNavigate();
  const {updateFlightSearch} = useContext(SearchFlightContext);
  const isComingFromSearch = true;

  const originCities = ["Delhi", "Mumbai", "Bengaluru", "Kolkata", "Chennai", "Hyderabad", "Jaipur", "Ahmedabad"];
  const destinationCities = ["Mumbai", "Kolkata", "Hyderabad", "Delhi", "Bengaluru", "Coimbatore", "Goa", "Guwahati", "Lucknow", "Pune", "Madurai", "Patna", "Tirupati", "Visakhapatnam"];


  const handleOneWayClick = () => {
    setIsOneWayActive(true);
    setIsRoundTripActive(false);
  };

  const handleRoundTripClick = () => {
    setIsRoundTripActive(true);
    setIsOneWayActive(false);
  };

  
  const handleTravellersChange = (event) => {
    setNumberOfTravellers(event.target.value);
  };
  
  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);
  };

  const handleReturnDateChange = (date) => {
    setReturnDate(date);
  };

  const handleFromCityChange = (event) => {
    setFromCity(event.target.value);
  };

  const handleToCityChange = (event) => {
    setToCity(event.target.value);
  };

  useEffect(() => {
    if (departureDate && !returnDate) {
      handleOneWayClick();
    } else if (departureDate && returnDate) {
      handleRoundTripClick();
    }
  }, [departureDate, returnDate]);
  
  const handleSearch = () => {
    let data = true;
    if (parseInt(numberOfTravellers) > 9 || parseInt(numberOfTravellers) < 1) {
      window.alert("Number of travellers must be between 1 and 9.");
      return;
    }
    if (isRoundTripActive && returnDate <= departureDate) {
      window.alert("Return date must be after departure date.");
      return;
    }  
    if ((fromCity || toCity || departureDate || numberOfTravellers) &&
      (!fromCity || !toCity || !departureDate || !numberOfTravellers || numberOfTravellers == "")) {
      window.alert("Please enter all the fields");
      data = false;
    }
    else if(fromCity === toCity && fromCity)
    {
      window.alert("The Departure city can't be same as the Arrvial city");
      data = false;
    }
    if(data){
    // const formData = {
    //   fromCity : fromCity,
    //   toCity : toCity,
    //   departureDate : departureDate,
    //   returnDate : returnDate,
    //   travellers : numberOfTravellers,
    //   isRoundTripActive : isRoundTripActive
    // };
    updateFlightSearch(fromCity, toCity, departureDate, returnDate, parseInt(numberOfTravellers), true);
    navigate('/flights');
    }
  }

  return (
    <div className="searchcontainer">
      <div className="d-flex justify-content-between gap-3 p-4 mt-0">
        <div className="button-group">
          <button id="OneWay" className={isOneWayActive && !isRoundTripActive ?"btn-click":"btn-small"} onClick={handleOneWayClick}>One Way</button>
             <button id="RoundTrip" className={isRoundTripActive && !isOneWayActive ? "btn-click":"btn-small"} onClick={handleRoundTripClick}>Round Trip</button>
        </div>
        <QuoteChanger quotes={quotes} interval={1500}/>
      </div>

      <div className='inputcontainer'>
        <div className="inputs">
          {/* From City Dropdown */}
          <label htmlFor="fromCity" className="form-label"></label>
          <select className="form-control" id="fromCity" value={fromCity} onChange={handleFromCityChange} required>
            <option value="" disabled selected>From</option>
            {originCities.map((city, idx) => (
              <option key={idx} value={city}>{city}</option>
            ))}
          </select>
          {/* To City Dropdown */}
          <label htmlFor="toCity" className="form-label"></label>
          <select className="form-control" id="toCity" value={toCity} onChange={handleToCityChange} required>
            <option value="" disabled selected>To</option>
            {destinationCities.map((city, idx) => (
              <option key={idx} value={city}>{city}</option>
            ))}
          </select>
            <label htmlFor="departure" className="form-label"></label>
            <DatePicker
              selected={departureDate}
              onChange={handleDepartureDateChange}
              placeholderText="Departure"
              className="date"
              id="departure"
              minDate={new Date()}
              maxDate={new Date(new Date().setMonth(new Date().getMonth() + 3))}
            />
            <label htmlFor="return" className="form-label"></label>
            <DatePicker
              selected={returnDate}
              onChange={handleReturnDateChange}
              placeholderText="Return"
              className="date"
              id="return"
              minDate={departureDate || new Date()}
              maxDate={new Date(new Date().setMonth(new Date().getMonth() + 3))}
            />
          <label htmlFor="travellers" className="form-label"></label>
          <select className="form-control" id="travellers" value={numberOfTravellers} onChange={handleTravellersChange} style={{ color: '#6c757d' }} required >
            <option value="" disabled selected>No of Travellers</option> {/* Placeholder option */}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          {/* <select className="form-control" id="travellers" style={{ color: '#6c757d' }} required>
            <option value="" disabled selected>Cabin Class</option>
            <option value="Economy">Economy</option>
            <option value="Buisness">Buisness</option>
            <option value="FirstClass">First class</option>
          </select> */}
          <button  type="button" className="btn btn-outline-danger button btn-lg" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;