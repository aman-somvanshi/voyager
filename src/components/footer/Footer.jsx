import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Website Name</p>
        <ul>
          <li><a href="https://google.com/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
          <li><a href="https://bing.com/" target="_blank" rel="noopener noreferrer">Terms of Use</a></li>
          <li><a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;