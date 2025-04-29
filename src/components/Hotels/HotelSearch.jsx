import './HotelSearch.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

const HotelSearch = () => {
    const [destination, setDestination] = useState('');
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [guests, setGuests] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!destination || !checkIn || !checkOut || !guests) {
            alert('Please fill in all the fields.');
            return;
        }

        if (checkOut <= checkIn) {
            alert('Check-out date must be after check-in date.');
            return;
        }

        navigate('/hotel-results', { state: { searchParams: { destination, checkIn, checkOut, guests } } });
    };




    
    return (
<div className="searchHotelc">
      <div className='inputcontainer'>
      <div className="inputs">
        <label htmlFor="Destination" className="destination-label"></label>
        <input 
        type="text" 
        className="form-control" 
        id="fromCity" 
        placeholder="Destination" 
        value={destination}
        onChange={(e)=>setDestination(e.target.value)}
        required/>
          <label htmlFor="departure" className="form-label"></label>
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
            placeholderText="Check-In"
            className="date"
            id="departure"
            minDate={new Date()}
          />
          <label htmlFor="return" className="form-label"></label>
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date)}
            placeholderText="Check-Out"
            className="date"
            id="return"
            minDate={new Date()}
          />
          <label htmlFor="travellers" className="form-label"></label>
          <input 
          type="text" 
          className="form-control" 
          id="travellers" 
          placeholder="Rooms & Guests" 
          value={guests}
          onChange={(e)=>setGuests(e.target.value)}
          required/>
          <button  type="button" className="btn btn-outline-danger button btn-lg" onClick={handleSearch}>Search</button>
          </div>
          </div>
          </div>
      );
}
export default HotelSearch;