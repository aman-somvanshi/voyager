import React, { useContext, useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchFlightContext } from './SearchFlightContext';
import "bootstrap/dist/css/bootstrap.min.css";

const FlightBookingPage = () => {
  const { noOfTravellers: contextNoOfTravellers } = useContext(SearchFlightContext);
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  const [travellers, setTravellers] = useState(contextNoOfTravellers || 0);
  const [prompted, setPrompted] = useState(false);
  const hasCancelledOrInvalid = useRef(false);

  useEffect(() => {
    if (travellers === 0 && !prompted && !hasCancelledOrInvalid.current) {
      setPrompted(true);
      const numberOfTravellers = prompt("Please enter the number of travellers:", 1);

      if (numberOfTravellers === null) {
        hasCancelledOrInvalid.current = true;
        window.alert("Booking cancelled by user.");
        navigate("/home");
      } else {
        const parsedTravellers = parseInt(numberOfTravellers, 10);
        if (!isNaN(parsedTravellers) && parsedTravellers > 0) {
          setTravellers(parsedTravellers);
        } else {
          hasCancelledOrInvalid.current = true;
          window.alert("Invalid number of travellers entered. Booking cancelled.");
          navigate("/home");
        }
      }
    }
  }, [travellers, navigate, prompted]);

  const bookingData = state || {};

  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function dateFormatting(dateString) {
    if (!dateString) return ""; 
    const [month, day, year] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    const options = { weekday: 'short', day: '2-digit', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <div className="container mt-4" style={{ backgroundColor: "#ffffff", color: "#000000" }}>
      <div className="row">
        <div className="col-md-8">
          <div className="card bg-white text-dark border-dark p-4">
            <h4 className="text-dark">
              <span>{bookingData.originCity}</span>
              <span>{bookingData.returnDate && <span> ↔ </span>}</span>
              <span>{!bookingData.returnDate && <span> → </span>}</span>
              <span>{bookingData.destinationCity}</span>
            </h4>
            <p className="text-dark">
              {dateFormatting(bookingData.departureDate)} •
              {bookingData.stops === 0 && <span>Non-stop</span>}
              {bookingData.stops > 0 && <span>{bookingData.stops} stops</span>} •
              {bookingData.formattedDuration}
            </p>

            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="text-dark">{bookingData.airline} | {bookingData.flightNumber}</h5>
                <p className="text-dark">⏳ <strong>{getRandom(70, 95)}% On-time</strong></p>
              </div>
              <div>
                <p className="text-dark">
                  🛫 <strong>{bookingData.departureTime}</strong> — {bookingData.originCode} ({bookingData.originCity})
                </p>
                <p className="text-dark">
                  🛬 <strong>{bookingData.arrivalTime}</strong> — {bookingData.destinationCode} ({bookingData.destinationCity})
                </p>
              </div>
            </div>

            <hr className="border-dark" />

            <div className="d-flex justify-content-between">
              <div>
                <p className="text-dark">
                  <strong>{bookingData.originCity} {getRandom(1, 2) === 1 && <span> International</span>} Airport</strong>
                </p>
                <p className="text-dark">Terminal {getRandom(1, 4)}</p>
              </div>
              <div>
                <p className="text-dark">
                  <strong>{bookingData.destinationCity} {getRandom(1, 2) === 1 && <span> International</span>} Airport</strong>
                </p>
                <p className="text-dark">Terminal {getRandom(1, 4)}</p>
              </div>
            </div>

            <hr className="border-dark" />

            <div>
              <h6 className="text-dark">🧳 Baggage Allowance</h6>
              <p className="text-dark">📌 Cabin: <strong>{getRandom(5, 7)} kg per adult</strong></p>
              <p className="text-dark">📌 Check-in: <strong>{getRandom(13, 18)} kg per luggage, 1 luggage per adult</strong></p>
            </div>
          </div>
        </div>

        {/* Right Side - Pricing and Coupons */}
        <div className="col-md-4">
          <div className="card bg-white text-dark border-dark p-4">
            <h4 className="text-dark">Total Price</h4>
            <h3 className="text-danger">₹{bookingData.price * travellers - bookingData.discount * travellers}</h3>
            <p className="text-dark">{travellers} adult</p>
            <button className="btn btn-danger w-50">View Breakup</button>

            <hr className="border-dark" />

            <h6 className="text-dark">Apply Coupon or Gift Card</h6>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Enter coupon code" />
              <button className="btn btn-danger">Apply</button>
            </div>

            <h6 className="text-dark">All Offers & Bank Discounts</h6>
            <div className="p-3 bg-light rounded border-dark">
              <p className="text-dark"><strong>CTDOM</strong> - Flat ₹200 off</p>
              <p className="text-dark">Additional 5% cashback with Flipkart Axis Credit Card <a href="#">Know more</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBookingPage;