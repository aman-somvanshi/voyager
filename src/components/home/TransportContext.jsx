import { createContext, useContext, useState } from "react";
 
const TransportContext = createContext();

 
export const TravelModeProvider = ({ children }) => {
  const [selectedMode, setSelectedMode] = useState(null);
  const [isActiveFlight, setIsActiveFlight] = useState(false);
  const [isActiveHotel, setIsActiveHotel] = useState(false);

    if(selectedMode === "flights"){
     isActiveFlight = true;
    } 
     else if(selectedMode === "hotels"){
        isActiveHotel = true;
     }
 
  return (
    <TransportContext.Provider value={{ selectedMode, setSelectedMode, isActiveFlight, setIsActiveFlight, isActiveHotel, setIsActiveHotel }}>   
      {children}
    </TransportContext.Provider>
  );
};
 
export const useTravelMode = () => useContext(TransportContext);