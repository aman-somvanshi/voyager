import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrain, faPlaneUp,faBus, faHotel} from '@fortawesome/free-solid-svg-icons';
import './Transport.css';  //CSS File


const Transport = ({text}) => {
    return (
// Transport Component Just After navbar
    <div className="tcontainer">
     <ul className="transport-icons">
        <a href="#"><li><FontAwesomeIcon icon={faPlaneUp} className="transport-icon"/><span>Flights</span></li></a>  
        <a href="#"><li><FontAwesomeIcon icon={faHotel} className="transport-icon" /><span>Hotels</span></li></a> {/* Using FontAwesome Icons*/}
        <a href="#"><li><FontAwesomeIcon icon={faTrain} className="transport-icon" /><span>Trains</span> </li></a>
        <a href="#"><li><FontAwesomeIcon icon={faBus} className="transport-icon" /><span>Buses</span></li></a>
        <li className="right-aligned-text">{text}</li>  {/*hardcoded*/}
     </ul>
    </div>);
}
export default Transport;