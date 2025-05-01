// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './Home.css';
import Transport from './Transport';
import SearchBar from './Searchbar';
import More from './More';
import Cards from './homeCards/Cards';
import Footer from "./../footer/FooterMain";
import { useAuth } from '../../auth/authContext';
// import FlightsList from "./../flights/FlightsList";

function Home() {
  

  return (
    <>
      <div className="app-container" style={{fontFamily : "Roboto"}}>
        <div className="transport-wrapper">
          <Transport text={"Flight Booking"}/>
        </div>
        <div className="search-wrapper">
          <SearchBar></SearchBar>
        </div>
        <div className="more-wrapper">
          <More/>
        </div>
        <div>
          <Cards className="card-wrapper"/>
        </div>
        <div style = {{marginTop:"60px"}}>
          <Footer ></Footer>
        </div>
      </div>
    </>
  );
}

export default Home;
