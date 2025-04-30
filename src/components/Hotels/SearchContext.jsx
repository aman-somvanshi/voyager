// src/context/SearchContext.js
import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);

  const updateSearch = (newDestination, newCheckInDate, newCheckOutDate, newGuests) => {
    setDestination(newDestination);
    setCheckInDate(newCheckInDate);
    setCheckOutDate(newCheckOutDate);
    setGuests(newGuests);
  };

  return (
    <SearchContext.Provider
      value={{
        destination,
        checkInDate,
        checkOutDate,
        guests,
        setDestination, // Optionally expose individual setters
        setCheckInDate,
        setCheckOutDate,
        setGuests,
        updateSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};