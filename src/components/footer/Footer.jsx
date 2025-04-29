import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from './../../assets/Voyager_logo.png'

function Footer() {
    // const navigate = useNavigate();

    // const handleFlightSearch = (departure, arrival) => {
    //     navigate(`/flights?departureCity=${departure}&arrivalCity=${arrival}`);
    // };

    // const handleTrainSearch = (fromStation, toStation) => {
    //     navigate(`/trains?fromStation=${fromStation}&toStation=${toStation}`);
    // };

    // const handleHotelSearch = (city) => {
    //     navigate(`/hotels?city=${city}`);
    // };

    return (
        <footer className="main-footer">
            <div className="footer-container">
                {/* Explore Links Section
                <section className="explore-links">
                    <div className="explore-columns">
                        <div className="column">
                            <h3>Popular Flight Routes</h3>
                            <ul>
                                <li>
                                    <button
                                        onClick={() => handleFlightSearch('Delhi', 'Kolkata')}
                                        className="footer-link-button"
                                    >
                                        Delhi to Kolkata Flights
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleFlightSearch('Delhi', 'Dharamsala')}
                                        className="footer-link-button"
                                    >
                                        Delhi to Dharamsala Flights
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleFlightSearch('Delhi', 'Kolkata')}
                                        className="footer-link-button"
                                    >
                                        Delhi to Kolkata Flights
                                    </button>
                                </li>
                                 <li>
                                    <button
                                        onClick={() => handleFlightSearch('Mumbai', 'Chennai')}
                                        className="footer-link-button"
                                    >
                                        Mumbai to Chennai Flights
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="column">
                            <h3>Top Flight Routes</h3>
                            <ul>
                                <li>
                                    <button
                                        onClick={() => handleFlightSearch('Delhi', 'Hyderabad')}
                                        className="footer-link-button"
                                    >
                                        Delhi to Hyderabad Flights
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleFlightSearch('Surat', 'Ayodhya')}
                                        className="footer-link-button"
                                    >
                                        Surat to Ayodhya Flights
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleFlightSearch('Mumbai', 'Ahmedabad')}
                                        className="footer-link-button"
                                    >
                                        Mumbai to Ahmedabad Flights
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleFlightSearch('Bengaluru', 'Kochi')}
                                        className="footer-link-button"
                                    >
                                        Bengaluru to Kochi Flights
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="column">
                            <h3>Popular Train Routes</h3>
                            <ul>
                                 <li>
                                    <button
                                        onClick={() => handleTrainSearch('Hyderabad', 'Ayodhya')}
                                        className="footer-link-button"
                                    >
                                        Hyderabad to Ayodhya Trains
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleTrainSearch('Chennai', 'Coimbatore')}
                                        className="footer-link-button"
                                    >
                                        Chennai to Coimbatore Trains
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleTrainSearch('Delhi', 'Chandigarh')}
                                        className="footer-link-button"
                                    >
                                        Delhi to Chandigarh Trains
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleTrainSearch('Mumbai', 'Jaipur')}
                                        className="footer-link-button"
                                    >
                                        Mumbai to Jaipur Trains
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="column">
                            <h3>Top Train Routes</h3>
                            <ul>
                                <li>
                                    <button
                                        onClick={() => handleTrainSearch('Delhi', 'Ahmedabad')}
                                        className="footer-link-button"
                                    >
                                        Delhi to Ahmedabad Trains
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleTrainSearch('Mumbai', 'Ayodhya')}
                                        className="footer-link-button"
                                    >
                                        Mumbai to Ayodhya Trains
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleTrainSearch('Delhi', 'Amritsar')}
                                        className="footer-link-button"
                                    >
                                        Delhi to Amritsar Trains
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleTrainSearch('Coimbatore', 'Chennai')}
                                        className="footer-link-button"
                                    >
                                        Coimbatore to Chennai Trains
                                    </button>
                                </li>
                            </ul>
                        </div>
                         <div className="column plan-trip-column">
                            <h3>Plan Your Trip</h3>
                            <ul>
                                <li>
                                    <button
                                        onClick={() => handleHotelSearch('Kolkata')}
                                        className="footer-link-button"
                                    >
                                        Bengaluru to Kolkata Hotels
                                    </button>
                                </li>
                                <li>
                                    <button
                                         onClick={() => handleHotelSearch('Patna')}
                                        className="footer-link-button"
                                    >
                                        Delhi to Patna Hotels
                                    </button>
                                </li>
                                <li>
                                     <button
                                        onClick={() => handleHotelSearch('Pune')}
                                        className="footer-link-button"
                                    >
                                        Bangalore to Pune Hotels
                                    </button>
                                </li>
                                <li>
                                     <button
                                        onClick={() => handleHotelSearch('Kolkata')}
                                        className="footer-link-button"
                                    >
                                        Bengaluru to Kolkata Hotels
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section> */}

                {/* Important Links Section */}
                <section className="important-links">
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="https://www.irctctourism.com/gallery/tag.html">IRCTC Trains</a></li>
                        <li><a href="https://www.ixigo.com/trains/tatkal-railway-reservation">Tatkal Railway Reservation</a></li>
                        {/* <li><a href="#">PNR Status</a></li>
                        <li><a href="#">Train Running Status</a></li>
                        <li><a href="#">Train Seat Availability</a></li>
                        <li><a href="#">Platform Locator</a></li> */}
                        <li><a href="https://vandebharatexpress.co.in/">Vande Bharat Express</a></li>
                        <li><a href="https://contents.irctc.co.in/en/eticketCancel.html">IRCTC Cancellation Charges</a></li>
                        {/* <li><a href="#">Flight Booking</a></li>
                        <li><a href="#">International Flights</a></li>
                        <li><a href="#">Student Flight Booking</a></li>
                        <li><a href="#">Armed Forces Flight Booking</a></li>
                        <li><a href="#">Senior Citizen Flight Booking</a></li>
                        <li><a href="#">Airlines Flight Status List</a></li>
                        <li><a href="#">abhibus</a></li>
                        <li><a href="#">ConfirmTkt</a></li> */}
                        <li><a href="#">Travel Stories</a></li>
                        {/* <li><a href="#">Responsible Disclosure</a></li> */}
                    </ul>
                </section>
                {/* Bottom Footer (Copyright, Legal, Social, App Store Links) - MODIFIED */}
<div className="footer-bottom">
  <div className="footer-separator">
    <hr className="black-divider" />
    <div className="logo-container">
      <img src={logo} alt="Voyager" className="separator-logo" />
    </div>
  </div>

 
  <div className="footer-links-row">
    {/* <Link to="#">Advertise with us</Link> */}
    <Link to="#">About Us</Link>
    <Link to="#">Privacy</Link>
    <Link to="#">Terms</Link>
    <Link to="#">Careers</Link>
    <Link to="#">Customer Service</Link>
    {/* <Link to="#">Investor Relations</Link> */}
    {/* <Link to="#">CSR</Link> */}
  </div>
  {/* <div className="footer-links-row">
    <Link to="#">Privacy</Link>
    <Link to="#">Terms</Link>
    <Link to="#">Careers</Link>
    <Link to="#">Customer Service</Link>
  </div> */}
  <div className="copyright-info">
    <p>&copy; {new Date().getFullYear()} Voyager. All rights reserved.</p>
  </div>
</div>
            </div>
        </footer>
    );
}

export default Footer;