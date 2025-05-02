import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrain, faPlaneUp,faBus, faHotel} from '@fortawesome/free-solid-svg-icons';
import './Transport.css';  //CSS File
import { useTravelMode } from '../home/TransportContext'; // Importing TravelModeContext


const Transport = ({text}) => {
    const {selectedMode, setSelectedMode, isActiveFlight, setIsActiveFlight, isActiveHotel, setIsActiveHotel} = useTravelMode();
      
    
    function handleFlights(event)
    {
        // event.preventDefault();
        // setFormdata({});
        setSelectedMode("flights");
        console.log("Flights selected");
    }
    function handleHotels()
    {
        // setFormdata({});
        setSelectedMode("hotels");
    }

    return (    
// Transport Component Just After navbar
    <div className="tcontainer">
     <ul className="transport-icons">
     <a href = "/flights" onClick={handleFlights}><li><FontAwesomeIcon icon={faPlaneUp} className={isActiveFlight ? "transport-icon-select" : "transport-icon"}/><span>Flights</span></li></a>  
        <a href="/hotel" onClick={handleHotels}><li><FontAwesomeIcon icon={faHotel} className={isActiveHotel ? "transport-icon-select" : "transport-icon"} /><span>Hotels</span></li></a> {/* Using FontAwesome Icons*/}
        <a href="#"><li><FontAwesomeIcon icon={faTrain} className="transport-icon" /><span>Trains</span> </li></a>
        <a href="#"><li><FontAwesomeIcon icon={faBus} className="transport-icon" /><span>Buses</span></li></a>
        <li className="right-aligned-text">{text}</li>  {/*hardcoded*/}
     </ul>
    </div>);
}
export default Transport;