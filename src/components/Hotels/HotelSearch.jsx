import './HotelSearch.css';
import React, { useState, useContext, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../Hotels/SearchContext'; // Ensure correct path

const HotelSearch = ({ initialDestination, initialCheckIn, initialCheckOut, initialGuests }) => {
  const [destination, setDestination] = useState(initialDestination || '');
  const [checkIn, setCheckIn] = useState(initialCheckIn || null);
  const [checkOut, setCheckOut] = useState(initialCheckOut || null);
  const [guests, setGuests] = useState(initialGuests || '');
  const navigate = useNavigate();
  const { updateSearch } = useContext(SearchContext);
  // Update local state when props change (for cases where the component might re-render)
  useEffect(() => {
    setDestination(initialDestination || '');
    setCheckIn(initialCheckIn || null);
    setCheckOut(initialCheckOut || null);
    setGuests(initialGuests || '');
  }, [initialDestination, initialCheckIn, initialCheckOut, initialGuests]);
  const cities = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Chennai',
    'Kolkata',
    'Hyderabad',
    'Pune',
    'Ahmedabad',
    'Jaipur',
    'Lucknow',
  ];
  const handleCityChange = (event) => {
    setDestination(event.target.value);
  };

  const handleSearch = () => {
    if (!destination || !checkIn || !checkOut || !guests) {
      alert('Please fill in all the fields.');
      return;
    }

    if (checkOut <= checkIn) {
      alert('Check-out date must be after check-in date.');
      return;
    }

    updateSearch(destination, checkIn, checkOut, parseInt(guests, 10) || 1);
    navigate('/hotel-results');
  };

  return (
    <div className="searchHotelc">
      <div className='inputcontainer'>
        <div className="inputs">
          <label htmlFor="Destination" className="destination-label"></label>
          <select
            type="text"
            className="form-control"
            id="fromCity"
            placeholder="Destination"
            value={destination}
            onChange={handleCityChange}
            required
          >
            <option value="" disabled>Select a Destination</option> {/* Default placeholder option */}
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
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
            placeholder="Rooms"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
          <button type="button" className="btn btn-outline-danger button btn-lg" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;