import React, { useContext } from 'react';
import { HotelContext } from './HotelContext';
import HotelCard from './HotelCard';
import NavBar from '../NavBar';
import HotelSearch from './HotelSearch';
import Transport from '../home/Transport';
import './HotelResults.css';
import { SearchContext } from '../Hotels/SearchContext'; // Ensure correct path

const HotelResults = () => {
  const { destination, checkInDate, checkOutDate, guests } = useContext(SearchContext);
  const { hotels, loading, error } = useContext(HotelContext);

  if (loading) {
    return <div className="hotel-results">Loading hotels...</div>;
  }

  if (error) {
    return <div className="hotel-results">Error loading hotels: {error}</div>;
  }

  if (!hotels || hotels.length === 0) {
    return <div className="hotel-results">No hotels available.</div>;
  }

  const filteredHotels = hotels.filter(hotel => {
    const destinationMatch = hotel.city?.toLowerCase() === (destination?.toLowerCase() || '');
    const isAvailable = hotel.availability?.some(period => {
      const startDate = new Date(period.startDate);
      const endDate = new Date(period.endDate);
      return checkInDate && checkOutDate && checkInDate >= startDate && checkOutDate <= endDate;
    });
    return destinationMatch && isAvailable;
  });

  return (
    <>
      <NavBar />
      <Transport />
      <HotelSearch
        initialDestination={destination}
        initialCheckIn={checkInDate}
        initialCheckOut={checkOutDate}
        initialGuests={guests}
      />
      <div className="hotel-results">
        <h2 className="available">Available Hotels in {destination || 'All Destinations'}</h2>
      </div>
      {filteredHotels.length > 0 ? (
        <ul className="hotel-cards-grid">
          {filteredHotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </ul>
      ) : (
        <p>No hotels available for the selected dates and destination.</p>
      )}
    </>
  );
};

export default HotelResults;