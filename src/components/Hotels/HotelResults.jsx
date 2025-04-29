import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
// import './HotelResults.css';
import { HotelContext } from './HotelContext';
import HotelCard from './HotelCard';
import NavBar from '../NavBar';

const HotelResults = () => {
    const location = useLocation();
    const { searchParams } = location.state || {};
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

    const formatDate = (date) => {
        if (!date) return '';
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    const filteredHotels = hotels.filter(hotel => {
        const destinationMatch = hotel.city.toLowerCase() === (searchParams?.destination?.toLowerCase() || '');
       
        const isAvailable = hotel.availability.some(period => {
            const startDate = new Date(period.startDate);
            const endDate = new Date(period.endDate);
            const checkInDate = searchParams?.checkIn ? new Date(searchParams.checkIn) : null;
            const checkOutDate = searchParams?.checkOut ? new Date(searchParams.checkOut) : null;

            return checkInDate && checkOutDate && checkInDate >= startDate && checkOutDate <= endDate;
        });
        return destinationMatch && isAvailable;
    });
    // console.log('filteredHotels in HotelResults:', filteredHotels);

    return (
        <>
        <NavBar/>
        <div className="hotel-results">
            <h2>Available Hotels in {searchParams?.destination}</h2>
            <p>
                From {formatDate(searchParams?.checkIn)} to {formatDate(searchParams?.checkOut)} for {searchParams?.guests}
            </p>
            {filteredHotels.length > 0 ? (
                <ul className="hotel-list">
                    {filteredHotels.map(hotel => (
                       <HotelCard key={hotel.id} hotel={hotel} />
                    ))}
                </ul>
            ) : (
                <p>No hotels available for the selected dates and destination.</p>
            )}
        </div>
        </>
    );
};

export default HotelResults;