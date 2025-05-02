import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FlightBookingUI = () => {
  return (
    <div className="container mt-4" style={{ backgroundColor: "#ffffff", color: "#000000"}}>
      <div className="row">
        {/* Left Side - Flight Details */}
        <div className="col-md-8">
          <div className="card bg-white text-dark border-dark p-4">
            <h4 className="text-dark">Chennai → Ghaziabad</h4>
            <p className="text-dark">Sun, 01 Jun • Non-stop • 2h 40m • Economy</p>

            <div className="alert alert-warning">
              <strong>Note:</strong> You searched for a flight to DEL (Delhi Indira Gandhi International Airport), but you have selected HDO (Hindon Airport) as the arrival airport.
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="text-dark">IX - Air India Express | IX 1621</h5>
                <p className="text-dark">⏳ <strong>77% On-time</strong></p>
              </div>
              <div>
                <p className="text-dark">🛫 <strong>05:50</strong> — MAA (Chennai)</p>
                <p className="text-dark">🛬 <strong>08:30</strong> — HDO (Ghaziabad)</p>
              </div>
            </div>

            <hr className="border-dark" />

            <div className="d-flex justify-content-between">
              <div>
                <p className="text-dark"><strong>Chennai International Airport</strong></p>
                <p className="text-dark">Terminal 4</p>
              </div>
              <div>
                <p className="text-dark"><strong>Hindon Airport</strong></p>
              </div>
            </div>

            <hr className="border-dark" />

            <div>
              <h6 className="text-dark">🧳 Baggage Allowance</h6>
              <p className="text-dark">📌 Cabin: <strong>7 kg per adult</strong></p>
              <p className="text-dark">📌 Check-in: <strong>15 kg per piece, 1 piece per adult</strong></p>
            </div>
          </div>
        </div>

        {/* Right Side - Pricing and Coupons */}
        <div className="col-md-4">
          <div className="card bg-white text-dark border-dark p-4">
            <h4 className="text-dark">Total Price</h4>
            <h3 className="text-danger">₹2,847</h3>
            <p className="text-dark">1 adult</p>
            <button className="btn btn-danger w-100">View Breakup</button>

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

export default FlightBookingUI;
