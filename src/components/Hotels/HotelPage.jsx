import NavBar from "../NavBar";
import Transport from "./../home/Transport";
import HotelSearch from "../Hotels/HotelSearch";
import Cards from "../home/homeCards/Cards";
const Hotel = () => {
    return ( 
      <>
      <Transport text={"Hotel Booking"}/>
      <HotelSearch/>
      <Cards title={"Today's Hotel Offers"}/>
      </>
     );
}
export default Hotel;