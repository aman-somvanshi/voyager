import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Searchbar.css';
import QuoteChanger from './QuoteChanger';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({onDataChange}) => {

  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [isOneWayActive, setIsOneWayActive] = useState(true); 
  const [isRoundTripActive, setIsRoundTripActive] = useState(false);
  const quotes=["24*7 Customer Support","Hassle-free-Bookings","Best Flights Offers"];

  const handleOneWayClick = () => {
    setIsOneWayActive(true);
    setIsRoundTripActive(false);
  };

  const handleRoundTripClick = () => {
    setIsRoundTripActive(true);
    setIsOneWayActive(false);
  };

  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);
  };

  const handleReturnDateChange = (date) => {
    handleRoundTripClick();
    setReturnDate(date);
  };

  const handleFromCityChange = (event) => {
    setFromCity(event.target.value);
  };

  const handleToCityChange = (event) => {
    setToCity(event.target.value);
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    const formData = {
      fromCity : fromCity,
      toCity : toCity,
      departureDate : departureDate,
      returnDate : returnDate,
    };
    navigate('/flights', {state: formData});
  }

  return (
    <div className="searchcontainer">
      <div className="d-flex justify-content-between gap-3 p-4 mt-0">
        <div className="button-group">
          <button id="OneWay" className={isOneWayActive?"btn-click":"btn btn-outline-danger rounded-pill ms-2"} onClick={handleOneWayClick}>One Way</button>
          <button id="RoundTrip" className={isRoundTripActive? "btn-click":"btn btn-outline-danger rounded-pill ms-2"} onClick={handleRoundTripClick}>Round Trip</button>
        </div>
        <QuoteChanger quotes={quotes} interval={1500}/>
      </div>

      <div className='inputcontainer'>
        <div className="inputs">
          <label htmlFor="fromCity" className="form-label"></label>
          <input type="text" className="form-control" id="fromCity" placeholder="From" value={fromCity} onChange={handleFromCityChange} required/>
          <label htmlFor="toCity" className="form-label"></label>
          <input type="text" className="form-control" id="toCity" placeholder="To" value={toCity} onChange={handleToCityChange} required/>
            <label htmlFor="departure" className="form-label"></label>
            <DatePicker
              selected={departureDate}
              onChange={handleDepartureDateChange}
              placeholderText="Departure"
              className="date"
              id="departure"
            />
            <label htmlFor="return" className="form-label"></label>
            <DatePicker
              selected={returnDate}
              onChange={handleReturnDateChange}
              placeholderText="Return"
              className="date"
              id="return"
            />
          <label htmlFor="travellers" className="form-label"></label>
          <input type="text" className="form-control" id="travellers" placeholder="Traveller & Classes" required/>
          <button  type="button" className="btn btn-outline-danger button btn-lg" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;