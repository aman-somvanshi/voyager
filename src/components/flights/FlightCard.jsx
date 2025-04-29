import { IoIosLock, IoIosArrowForward } from 'react-icons/io';

const FlightCard = ({ flight }) => {
  return (
    <div className="bg-white rounded shadow overflow-hidden">
      {/* Special Tags */}
      <div className="d-flex flex-wrap gap-2 px-3 pt-3">
        {flight.recommended && (
          <span className="d-inline-flex align-items-center px-2 py-1 rounded-pill text-sm bg-purple-light text-purple-dark">
            <span className="me-1">★</span> Recommended
          </span>
        )}
        {flight.secondFastest && (
          <span className="d-inline-flex align-items-center px-2 py-1 rounded-pill text-sm bg-blue-light text-blue-dark">
            <span className="me-1">⚡</span> 2nd Fastest
          </span>
        )}
        {flight.freeMeal && (
          <span className="d-inline-flex align-items-center px-2 py-1 rounded-pill text-sm bg-warning-light text-warning-dark">
            <span className="me-1">🍽️</span> Free Meal
          </span>
        )}
      </div>

      {/* Flight Details */}
      <div className="p-3 d-flex flex-column flex-md-row align-items-start align-items-md-center">
        {/* Airline Info */}
        <div className="d-flex align-items-center w-100 w-md-25 mb-3 mb-md-0">
          <div className="w-16 h-16 me-3 d-flex align-items-center justify-content-center">
            {flight.airline === 'IndiGo' ? (
              <div className="w-12 h-12 bg-indigo rounded d-flex align-items-center justify-content-center text-white">
                <span>6E</span>
              </div>
            ) : (
              <div className="w-12 h-12 bg-danger rounded d-flex align-items-center justify-content-center text-white">
                <span>AI</span>
              </div>
            )}
          </div>
          <div>
            <div className="fw-bold">{flight.airline}</div>
            <div className="small text-muted">{flight.flightNumber}</div>
          </div>
        </div>

        {/* Time and Duration */}
        <div className="d-flex align-items-center w-100 w-md-40 mb-3 mb-md-0">
          <div className="text-center flex-grow-1">
            <div className="fs-5 fw-bold">{flight.departureTime}</div>
            <div className="small text-muted">{flight.origin}</div>
          </div>

          <div className="d-flex flex-column align-items-center mx-4 flex-grow-1">
            <div className="small text-muted mb-1">{flight.formattedDuration}</div>
            <div className="w-100 border-bottom border-secondary position-relative">
              <div className="position-absolute top-50 start-50 translate-middle bg-secondary rounded-circle" style={{ width: '0.5rem', height: '0.5rem' }}></div>
            </div>
            <div className="small text-muted mt-1">
              {flight.stops === 0 ? 'Non-stop' : flight.stops === 1 ? '1 Stop' : `${flight.stops} Stops`}
            </div>
          </div>

          <div className="text-center flex-grow-1">
            <div className="fs-5 fw-bold">
              {flight.arrivalTime}
              {flight.nextDay && <span className="small text-danger align-top ms-1">+1</span>}
            </div>
            <div className="small text-muted">{flight.destination}</div>
          </div>
        </div>

        {/* Price and Book */}
        <div className="w-100 w-md-35 d-flex flex-column align-items-end">
          <div className="text-end mb-3 mb-md-0">
            <div className="fs-4 fw-bold">₹{flight.price}</div>
            {flight.discount && (
              <div className="small text-success">Extra ₹{flight.discount} Off</div>
            )}
          </div>

          <div className="d-flex flex-column align-items-end">
            <button className="btn btn-primary fw-bold py-2 px-4 rounded-pill mb-2 transition-colors">
              Book
            </button>
            <div className="bg-warning-subtle text-warning-emphasis px-3 py-2 rounded-pill d-flex align-items-center">
              <IoIosLock className="me-2" /> Lock Price @₹{flight.lockPrice}
            </div>
          </div>
        </div>
      </div>

      {/* Flight Details Link */}
      <div className="border-top border-secondary px-3 py-2 text-end">
        <a href="#" className="text-primary fw-medium d-inline-flex align-items-center">
          Flight Details <IoIosArrowForward className="ms-1" />
        </a>
      </div>
    </div>
  );
};

export default FlightCard;