import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import {faHeadset} from  '@fortawesome/free-solid-svg-icons';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../auth/authContext';

function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const {logout} = useAuth();

  useEffect(() => {
    function handleResize() {
      setIsCollapsed(window.innerWidth < 992); // Bootstrap's breakpoint for collapsing navbar
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // const navBrand = {
  //   marginBottom
  // }

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light navbar-light ">
      <span className = "container">
      <a className="navbar-brand" href="/home"><img id="Voyager-logo" src="src\assets\Voyager_logo.png" alt="Logo" draggable="false" height="45" /></a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleCollapse}
        aria-controls="navbarNav"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav" >
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link mx-2"  style={{fontFamily : "Roboto"}}><b>Help</b><FontAwesomeIcon icon={faCircleInfo} style={{marginLeft : "4px", height : "16px", marginBottom : "0px", marginTop : "1px"}}/></a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" style={{fontFamily : "Roboto"}}><b>Customer Support</b><FontAwesomeIcon icon={faHeadset} style={{marginLeft : "6px", height : "15px",  marginBottom : "1px"}}/></a>
          </li>
          <li className="nav-item ms-3">
          {/* <a className="btn btn-dark btn-rounded" href="/login">Log out</a> */}
          <button className="btn btn-dark btn-rounded" onClick={logout}>Logout</button>
          </li>
        </ul>
      </div>
      </span>
    </nav>
  );
}

export default NavBar;