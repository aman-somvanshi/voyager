import React, { useContext } from 'react';
import { HotelContext } from './HotelContext';
import HotelCard from './HotelCard';
import NavBar from '../NavBar';
import HotelSearch from './HotelSearch';
import Transport from '../home/Transport';
import './HotelResults.css';
import { SearchContext } from '../Hotels/SearchContext'; // Ensure correct path

const HotelResults = () => {
  const { destination,checkInDate,checkOutDate,guests,selectedHotelImage} = useContext(SearchContext);
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
    return destinationMatch; // Only filter by destination now
  });

  return (
    <>
      <NavBar />
      <Transport />
      <HotelSearch
        initialDestination={destination}
        initialCheckIn={checkInDate} // No longer needed for filtering here
         initialCheckOut={checkOutDate} // No longer needed for filtering here
         initialGuests={guests} 
         initialImg={selectedHotelImage}    // Might still be used for the search input
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
        <ul className="hotel-cards-grid">
        {hotels.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </ul>
      )}
    </>
  );
};

export default HotelResults;