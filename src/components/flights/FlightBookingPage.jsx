import React, { useContext, useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchFlightContext } from './SearchFlightContext';
import "bootstrap/dist/css/bootstrap.min.css";

// const navigate = useNavigate();
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
  // console.log(bookingData.returnFlightDate);  
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
  
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    gender: '',
    phoneNumber: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleConfirmBooking = () => {
    // console.log("HEllo world");
    // event.preventDefault();
    // navigate("/thankyou");
   // You can add your form submission logic here
  };
  

    



  return (
    <div className="container mt-4" style={{ backgroundColor: "#ffffff", color: "#000000" }}>
      <div className="row">
        <div className="col-md-8">
          <div className="card bg-white text-dark border-dark p-4">
            <h4 className="text-dark">
              <span>{bookingData.originCity}</span>
              <span>{bookingData.returnFlightDate && <span> ↔ </span>}</span>
              <span>{!bookingData.returnFlightDate && <span> → </span>}</span>
              <span>{bookingData.destinationCity}</span>
            </h4>
            <p className="text-dark">
              {dateFormatting(bookingData.departureDate)} •
              {bookingData.stops === 0 && <span> Non-stop • </span>}
              {bookingData.stops > 0 && <span>{bookingData.stops} stops • </span>}
              {bookingData.formattedDuration}
            </p>
            <div>{bookingData.returnFlightDate && <p className="text-dark">
              {dateFormatting(bookingData.returnFlightDate)} •
              {bookingData.returnStops === 0 && <span> Non-stop • </span>}
              {bookingData.returnStops > 0 && <span>{bookingData.returnStops} stops • </span>}
              {bookingData.formattedDuration}
            </p>}</div>
            <br />

            <div className="d-flex justify-content-between align-items-center">
              <div> 
                <h5 className="text-dark"><span>{bookingData.airline} | {bookingData.flightNumber}</span><span><span>{bookingData.returnFlightDate && <span> | </span>}</span>{bookingData.returnFlightNumber}</span> </h5>
                <p className="text-dark">⏳ <strong>{getRandom(70, 95)}% On-time</strong></p>
              </div>
              <div>
                <p className="text-dark">
                  🛫 <strong>{bookingData.departureTime}</strong> — {bookingData.originCode} ({bookingData.originCity})<span>{bookingData.returnFlightDate && <span> — 🛬 </span>}</span><strong>{bookingData.returnArrivalTime}</strong>
                </p>
                <p className="text-dark">
                  🛬 <strong>{bookingData.arrivalTime}</strong> — {bookingData.destinationCode} ({bookingData.destinationCity})<span>{bookingData.returnFlightDate && <span> — 🛫 </span>}</span><strong>{bookingData.returnDepartureTime}</strong>
                </p>
              </div>
            </div>

            <hr className="border-dark" />

            <div className="d-flex justify-content-between">
              <div>
                <p className="text-dark">
                  <strong>{bookingData.originCity} International Airport</strong>
                </p>
                <p className="text-dark">Terminal {getRandom(1, 4)}</p>
                <div>{bookingData.returnFlightDate && <span>
                  <p className="text-dark">
                    <strong>{bookingData.destinationCity} International Airport</strong>
                  </p>
                  <p className="text-dark">Terminal {getRandom(1, 4)}</p></span>}
                </div>
              </div>
              <div>
                <p className="text-dark">
                  <strong>{bookingData.destinationCity} International Airport</strong>
                </p>
                <p className="text-dark">Terminal {getRandom(1, 4)}</p>
                <div>{bookingData.returnFlightDate && <span>
                <p className="text-dark">
                  <strong>{bookingData.originCity}  International Airport</strong>
                </p>
                <p className="text-dark">Terminal {getRandom(1, 4)}</p></span>}
                </div>
              </div>
            </div>

            <hr className="border-dark" />

            <div>
              <h6 className="text-dark">🧳 Baggage Allowance</h6>
              <p className="text-dark">📌 Cabin: <strong>7 kg per adult</strong></p>
              <p className="text-dark">📌 Check-in: <strong>15 kg per luggage, 1 luggage per adult</strong></p>
            </div>
          </div>
        </div>

        {/* Right Side - Pricing and Coupons */}
        <div className="col-md-4">
          <div className="card bg-white text-dark border-dark p-4">
            <h3 className="text-dark" style={{fontFamily : "Roboto"}}>Total Price </h3>
            <div style={{display : "flex"}}>
              <div style={{fontFamily : "Roboto", marginRight:"15px"}}>
                <h3 className="text-danger">₹{bookingData.price * travellers - bookingData.discount * travellers}</h3>
                <p className="text-dark">{travellers} {travellers == 1 && <span>Adult</span>}{travellers > 1 && <span>Adults</span>}</p>
              </div>
              <div>
                <hr className="border-dark" />
              </div>
              <div style={{paddingLeft : "30px"}}>
              • Inclusive of all taxes 
              <br />
              <div >• {((bookingData.price - (bookingData.price * (.056) + bookingData.price * (.05))) * .056) * travellers} (5.6%)<span style={{marginLeft:"20px"}}> Service tax</span></div> 
              <span >• {((bookingData.price - (bookingData.price * (.056) + bookingData.price * (.05))) * .05) * travellers} (5%) GST</span> 
              </div>
            </div>
            <hr className="border-dark" />
            <div className="container mt-4">
              <h3>User Information</h3>
              <form onSubmit={handleConfirmBooking()}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">
                    Age:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">
                    Gender:
                  </label>
                  <select
                    className="form-select"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <button className="btn btn-danger mb-3" type="submit" style={{width : "100%", marginLeft:"0px", height:"45px", fontFamily:"Roboto"}} >
                Confirm Booking</button>
              </form>
            </div>
            

            {/* <h6 className="text-dark">Apply Coupon or Gift Card</h6>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Enter coupon code" />
              <button className="btn btn-danger">Apply</button>
            </div> */}

            {/* <h6 className="text-dark">All Offers & Bank Discounts</h6>
            <div className="p-3 bg-light rounded border-dark">
              <p className="text-dark"><strong>CTDOM</strong> - Flat ₹200 off</p>
              <p className="text-dark">Additional 5% cashback with Flipkart Axis Credit Card <a href="#">Know more</a></p> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBookingPage;