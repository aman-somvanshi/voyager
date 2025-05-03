import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ThankYou = () => {

    const navigate = useNavigate();
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          navigate('/home');
        }, 7000); // Navigate after 7 seconds
    
        // Clean up the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
      }, [navigate]);

  return (
    <div className="container mt-5">
      <div className="jumbotron bg-light">
        <h1 className="display-4">Thank You for Booking with Us!</h1>
        <p className="lead">Your travel plans are now confirmed.</p>
        <hr className="my-4" />
        <p>We appreciate you choosing our platform for your travel needs. You will receive a confirmation email shortly with your booking details.</p>
        <p>If you have any questions or need further assistance, please don't hesitate to contact our customer support.</p>
        <button className="btn btn-danger btn-lg" onClick={() => navigate('/home')} style={{marginTop : "10px"}}>
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ThankYou;