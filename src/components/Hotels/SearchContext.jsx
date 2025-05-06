// src/context/SearchContext.js
import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [selectedHotelImage, setSelectedHotelImage] = useState();
  const [roomsAvailable,setRoomsAvailable] = useState();
  const [hotelId, setHotelId] = useState(null);

  const updateSearch = (newDestination, newCheckInDate, newCheckOutDate, newGuests,newRoomAvailable,newHotelImage) => {
    setDestination(newDestination);
    setCheckInDate(newCheckInDate);
    setCheckOutDate(newCheckOutDate);
    setGuests(newGuests);
    setRoomsAvailable(newRoomAvailable)
    setSelectedHotelImage(newHotelImage)
  };

  return (
    <SearchContext.Provider
      value={{
        destination,
        checkInDate,
        checkOutDate,
        guests,
        selectedHotelImage, 
        roomsAvailable,
        hotelId,
        setDestination, // Optionally expose individual setters
        setCheckInDate,
        setCheckOutDate,
        setGuests,
        updateSearch,
        setSelectedHotelImage,
        setRoomsAvailable,
        setHotelId
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};