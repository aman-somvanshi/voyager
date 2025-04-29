import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './Home.css';
import Transport from './Transport';
import SearchBar from './Searchbar';
import More from './More';
import Cards1 from './homeCards/Cards';
import Footer from "./../footer/FooterMain";
import {BrowserRouter} from 'react-router-dom';
function Home() {

  const [flightSearchData, setFlightSearchData] = useState({});

  const handleDataFromFlightSearch = (data) => {
    setFlightSearchData(data);
    console.log('Data received from Search:', data);
    // You can now access individual properties of the data object
    console.log('From city:', data.toCity);
    console.log('To city:', data.fromCity);
  };

  return (
    <>
      <div className="app-container" style={{fontFamily : "Roboto"}}>
        <div className="transport-wrapper">
          <Transport/>
        </div>
        <div className="search-wrapper">
          <SearchBar onDataChange={handleDataFromFlightSearch}></SearchBar>
        </div>
        <div className="more-wrapper">
          <More/>
        </div>
        <div>
          <Cards1 className="card-wrapper"/>
        </div>
        <div style = {{marginTop:"60px"}}>
          <Footer ></Footer>
        </div>
      </div>
  </>
  );
}

export default Home;
