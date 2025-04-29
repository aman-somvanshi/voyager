import './HotelSearch.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const HotelSearch = () => {
    const [CheckIn, setCheckIn] = useState(null);
    const [CheckOut, setCheckOut] = useState(null);
    //  const handleCheckInDate = (date) => {
    //     setCheckIn(date);
    //   };
    //   const handleCheckOut = (date) => {
    //     setCheckOut(date);
    //   };
    return (
<div className="searchHotelc">
      <div className='inputcontainer'>
      <div className="inputs">
        <label htmlFor="Destination" className="destination-label"></label>
        <input type="text" className="form-control" id="fromCity" placeholder="Destination" required/>
          <label htmlFor="departure" className="form-label"></label>
          <DatePicker
            selected={CheckIn}
            onChange={(date) => setCheckIn(date)}
            placeholderText="Check-In"
            className="date"
            id="departure"
          />
          <label htmlFor="return" className="form-label"></label>
          <DatePicker
            selected={CheckOut}
            onChange={(date) => setCheckOut(date)}
            placeholderText="Check-Out"
            className="date"
            id="return"
          />
          <label htmlFor="travellers" className="form-label"></label>
          <input type="text" className="form-control" id="travellers" placeholder="Rooms & Guests" required/>
          <button  type="button" className="btn btn-outline-danger button btn-lg">Search</button>
          </div>
          </div>
          </div>
      );
}
export default HotelSearch;