// Footer.js
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; // If using React Router

function Footer() {
  return (
    <footer className="main-footer">
      {/* ... */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Website Name</p>
        <ul>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-of-use">Terms of Use</Link></li>
          <li><a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;