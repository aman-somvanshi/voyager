import NavBar from "../NavBar";
import Transport from "./../home/Transport";
import HotelSearch from "../Hotels/HotelSearch";
import Cards1 from '../home/homeCards/Cards.jsx';
const Hotel = () => {
    return ( 
      <>
      <Transport text={"Hotel Booking"}/>
      <HotelSearch/>
      <More/>
      <Cards1/>
      </>
     );
}
export default Hotel;