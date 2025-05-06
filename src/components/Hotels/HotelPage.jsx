import NavBar from "../NavBar";
import Transport from "./../home/Transport";
import HotelSearch from "../Hotels/HotelSearch";
import Cards from '../home/homeCards/Cards.jsx';
import { useLocation} from 'react-router-dom';
import { useTravelMode } from '../home/TransportContext';
import React, {useEffect} from 'react';
import Footer from "../footer/Footer.jsx";
import FooterMain from "../footer/FooterMain.jsx";

const Hotel = () => {

const {isActiveHotel, setIsActiveHotel} = useTravelMode();
const location = useLocation();
  useEffect(() => {
     if(location.pathname == "/hotel"){
       setIsActiveHotel(true);
     }
   }, [])
    return ( 
      <>
      <Transport text={"Hotel Booking"}/>
      <HotelSearch/>
      <Cards title={"Today's Hotel Offers"}/>
      <FooterMain/>
      </>
     );
}
export default Hotel;