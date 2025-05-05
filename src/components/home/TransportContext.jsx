import { createContext, useContext, useState } from "react";
 
const TransportContext = createContext();

 
export const TravelModeProvider = ({ children }) => {
  const [selectedMode, setSelectedMode] = useState(null);
  let [isActiveFlight, setIsActiveFlight] = useState(false);
  let [isActiveHotel, setIsActiveHotel] = useState(false);

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