import {createContext, useState} from "react";
// import {useState} from "react-router-dom"

export const SearchFlightContext = createContext();

export const FlightContextProvider = ({ children }) => {
    const [fromCity, setFromCity] = useState("");
    const [toCity, setToCity] = useState("");
    const [departureDate, setDepartureDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    const [numberOfTravellers, setNumberOfTravellers] = useState('');
    const [isComingFromSearch, setComingFromSearch] = useState(false);

  const updateFlightSearch = (fromCity, toCity, departureDate, returnDate, numberOfTravellers) => {
    setFromCity(fromCity);
    setToCity(toCity);
    setDepartureDate(departureDate);
    setReturnDate(returnDate);
    setNumberOfTravellers(numberOfTravellers);
    setComingFromSearch(true);
  };

  return (
    <SearchFlightContext.Provider
      value={{
        fromCity,
        toCity,
        departureDate,
        returnDate,
        numberOfTravellers,
        isComingFromSearch,
        setDepartureDate,
        setFromCity,
        setNumberOfTravellers,
        setReturnDate,
        setToCity,
        updateFlightSearch,
      }}
    >
      {children}
    </SearchFlightContext.Provider>
  );
};