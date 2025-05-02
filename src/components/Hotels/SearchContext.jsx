// src/context/SearchContext.js
import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [selectedHotelImage, setSelectedHotelImage] = useState('');
  const[roomsAvailable,setRoomsAvailable]=useState();

  const updateSearch = (newDestination, newCheckInDate, newCheckOutDate, newGuests,newRoomAvailable) => {
    setDestination(newDestination);
    setCheckInDate(newCheckInDate);
    setCheckOutDate(newCheckOutDate);
    setGuests(newGuests);
    setRoomsAvailable(newRoomAvailable)
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
        setDestination, // Optionally expose individual setters
        setCheckInDate,
        setCheckOutDate,
        setGuests,
        updateSearch,
        setSelectedHotelImage,
        setRoomsAvailable
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};