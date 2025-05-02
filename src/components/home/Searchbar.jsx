import React, { useState, useEffect, useContext, use } from 'react';
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
  }, [departureDate, returnDate, handleOneWayClick, handleRoundTripClick]);
  
  const handleSearch = () => {
    let data = true;
    if ((fromCity || toCity || departureDate || numberOfTravellers) &&
      (!fromCity || !toCity || !departureDate || !numberOfTravellers || numberOfTravellers == "No of Travellers")) {
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
          <label htmlFor="fromCity" className="form-label"></label>
          <input type="text" className="form-control" id="fromCity" placeholder="From" autocomplete="off" value={fromCity} onChange={handleFromCityChange} required/>
          <label htmlFor="toCity" className="form-label"></label>
          <input type="text" className="form-control" id="toCity" placeholder="To" value={toCity} onChange={handleToCityChange} required/>
            <label htmlFor="departure" className="form-label"></label>
            <DatePicker
              selected={departureDate}
              onChange={handleDepartureDateChange}
              placeholderText="Departure"
              className="date"
              id="departure"
              minDate={new Date()}
            />
            <label htmlFor="return" className="form-label"></label>
            <DatePicker
              selected={returnDate}
              onChange={handleReturnDateChange}
              placeholderText="Return"
              className="date"
              id="return"
              minDate={new Date()}
            />
          <label htmlFor="travellers" className="form-label"></label>
          <select className="form-control" id="travellers" value={numberOfTravellers} onChange={handleTravellersChange} style={{ color: '#6c757d' }} required >
            <option defaultValue="No of Traveller" >No of Travellers</option>
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