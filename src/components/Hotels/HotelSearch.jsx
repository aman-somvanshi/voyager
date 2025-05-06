import './HotelSearch.css';
import React, { useState, useContext, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../Hotels/SearchContext'; // Ensure correct path

const HotelSearch = ({ initialDestination, initialCheckIn, initialCheckOut, initialGuests }) => {
  const [destination, setDestination] = useState(initialDestination || '');
  // const [checkIn, setCheckIn] = useState(initialCheckIn || null);
  // const [checkOut, setCheckOut] = useState(initialCheckOut || null);
  const {guests, setGuests, checkInDate, checkOutDate, setCheckInDate, setCheckOutDate} = useContext(SearchContext);
  const navigate = useNavigate();
  const { updateSearch } = useContext(SearchContext);
  // Update local state when props change (for cases where the component might re-render)
  useEffect(() => {
    setDestination(initialDestination || '');
    setCheckInDate(initialCheckIn || null);
    setCheckOutDate(initialCheckOut || null);
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
    if (!destination || !checkInDate || !checkOutDate || !guests) {
      alert('Please fill in all the fields.');
      return;
    }

    if (checkOutDate <= checkInDate) {
      alert('Check-out date must be after check-in date.');
      return;
    }

    const maxAllowedDate = new Date();
    maxAllowedDate.setMonth(maxAllowedDate.getMonth() + 3);

    if (checkInDate > maxAllowedDate || checkOutDate > maxAllowedDate) {
      alert('Bookings can only be made up to 3 months in advance.');
      return;
    }

    const dayDifference = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
    if (dayDifference > 10) {
      alert('Maximum booking duration is 10 days.');
      return;
    }

    if (guests < 1 || guests > 15) {
      alert('Number of rooms must be between 1 and 15.');
      return;
    }

    updateSearch(destination, checkInDate, checkOutDate, parseInt(guests, 10) || 1);
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
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            placeholderText="Check-In"
            className="date"
            id="departure"
            minDate={new Date()}
            maxDate={new Date(new Date().setMonth(new Date().getMonth() + 3))} // 3 months limit
          />
          <label htmlFor="return" className="form-label"></label>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            placeholderText="Check-Out"
            className="date"
            id="return"
            minDate={checkInDate}
            maxDate={
              checkInDate
                ? new Date(
                    Math.min(
                      new Date(checkInDate.getTime() + 10 * 24 * 60 * 60 * 1000).getTime(), // check-in + 10 days
                      new Date(new Date().setMonth(new Date().getMonth() + 3)).getTime() // 3 months limit
                    )
                  )
                : new Date(new Date().setMonth(new Date().getMonth() + 3))
            }
          />
          <label htmlFor="travellers" className="form-label"></label>
          <input
            type="number"
            className="form-control"
            id="travellers"
            placeholder="Rooms"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            min="1"
            max="15"
            required
          />
          <button type="button" className="btn btn-outline-danger button btn-lg" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;