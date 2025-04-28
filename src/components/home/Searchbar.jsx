import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for styling
// import './Searchbar.css'; // Your existing CSS
import './Searchbar.css'; // Your existing CSS
import QuoteChanger from './QuoteChanger';

const SearchBar = () => {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [isOneWayActive, setIsOneWayActive] = useState(true); // Initially One Way is active
  const [isRoundTripActive, setIsRoundTripActive] = useState(false);
  const quotes=["24*7 Customer Support","Hassle-free-Bookings","Best Flights Offers"];

  const handleOneWayClick = () => {
    setIsOneWayActive(true);
    setIsRoundTripActive(false);
    // Any other logic for One Way selection
  };
  const handleRoundTripClick = () => {
    setIsRoundTripActive(true);
    setIsOneWayActive(false);
    // Any other logic for Round Trip selection
  };
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
          <input type="text" className="form-control" id="fromCity" placeholder="From"  required/>
          <label htmlFor="toCity" className="form-label"></label>
          <input type="text" className="form-control" id="toCity" placeholder="To" required/>
            <label htmlFor="departure" className="form-label"></label>
            <DatePicker
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
              placeholderText="Departure"
              className="date"
              id="departure"
            />
            <label htmlFor="return" className="form-label"></label>
            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              placeholderText="Return"
              className="date"
              id="return"
            />
          <label htmlFor="travellers" className="form-label"></label>
          <input type="text" className="form-control" id="travellers" placeholder="Traveller & Classes" required/>
          <button  type="button" className="btn btn-outline-danger button btn-lg">Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;