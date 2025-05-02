import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from './../../assets/Voyager_logo.png'

function Footer() {


    return (
        <footer className="main-footer">
            <div className="footer-container">
                <section className="important-links">
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="https://www.irctctourism.com/gallery/tag.html">IRCTC Trains</a></li>
                        <li><a href="https://www.ixigo.com/trains/tatkal-railway-reservation">Tatkal Railway Reservation</a></li>

                        <li><a href="https://vandebharatexpress.co.in/">Vande Bharat Express</a></li>
                        <li><a href="https://contents.irctc.co.in/en/eticketCancel.html">IRCTC Cancellation Charges</a></li>

                        <li><a href="#">Travel Stories</a></li>

                    </ul>
                </section>

<div className="footer-bottom">
  <div className="footer-separator">
    <hr className="black-divider" />
    <div className="logo-container">
      <img src={logo} alt="Voyager" className="separator-logo" />
    </div>
  </div>

 
  <div className="footer-links-row">

    <Link to="#">About Us</Link>
    <Link to="#">Privacy</Link>
    <Link to="#">Terms</Link>
    <Link to="#">Careers</Link>
    <Link to="#">Customer Service</Link>

  </div>

  <div className="copyright-info">
    <p>&copy; {new Date().getFullYear()} Voyager. All rights reserved.</p>
  </div>
</div>
            </div>
        </footer>
    );
}

export default Footer;