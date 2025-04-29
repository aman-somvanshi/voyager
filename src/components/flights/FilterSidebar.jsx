import PriceRangeSlider from './PriceRangeSlider';

const FilterSidebar = ({ filters, onFilterChange }) => {
  const handleStopFilterChange = (stop) => {
    let newStops = [...filters.stops];

    if (newStops.includes(stop)) {
      newStops = newStops.filter(s => s !== stop);
    } else {
      newStops.push(stop);
    }

    onFilterChange({ stops: newStops });
  };

  const handlePriceRangeChange = (newRange) => {
    onFilterChange({ priceRange: newRange });
  };

  const handleDepartureTimeChange = (time) => {
    let newTimes = [...filters.departureTime];

    if (newTimes.includes(time)) {
      newTimes = newTimes.filter(t => t !== time);
    } else {
      newTimes.push(time);
    }

    onFilterChange({ departureTime: newTimes });
  };

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="h5 mb-4">Filters</h2>

      {/* Stops Filter */}
      <div className="mb-4">
        <h3 className="h6 mb-3">Stops</h3>
        <div className="d-grid gap-3">
          <div className="d-flex justify-content-between align-items-center">
            <label htmlFor="non-stop" className="form-label text-secondary">Non-Stop</label>
            <input
              id="non-stop"
              type="checkbox"
              className="form-check-input"
              checked={filters.stops.includes('non-stop')}
              onChange={() => handleStopFilterChange('non-stop')}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <label htmlFor="1-stop" className="form-label text-secondary">1 Stop</label>
            <input
              id="1-stop"
              type="checkbox"
              className="form-check-input"
              checked={filters.stops.includes('1-stop')}
              onChange={() => handleStopFilterChange('1-stop')}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <label htmlFor="2+-stops" className="form-label text-secondary">2+ Stops</label>
            <input
              id="2+-stops"
              type="checkbox"
              className="form-check-input"
              checked={filters.stops.includes('2+-stops')}
              onChange={() => handleStopFilterChange('2+-stops')}
            />
          </div>
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <h3 className="h6 mb-3">Flight Price</h3>
        <PriceRangeSlider
          min={6457}
          max={57843}
          value={filters.priceRange}
          onChange={handlePriceRangeChange}
        />
        <div className="d-flex justify-content-between mt-2">
          <span className="small text-muted">₹{filters.priceRange[0]}</span>
          <span className="small text-muted">₹{filters.priceRange[1]}</span>
        </div>
      </div>

      {/* Departure Time Filter */}
      <div className="mb-4">
        <h3 className="h6 mb-3">Departure from Chennai</h3>
        <div className="row row-cols-2 g-3">
          <div
            className={`time-filter-option p-2 text-center border rounded cursor-pointer ${filters.departureTime.includes('early-morning') ? 'border-primary' : ''}`}
            onClick={() => handleDepartureTimeChange('early-morning')}
          >
            <span className="fs-4 mb-1 d-block">☀️</span>
            <span className="fw-medium d-block">Early Morning</span>
            <span className="small text-muted d-block">Before 6AM</span>
          </div>
          <div
            className={`time-filter-option p-2 text-center border rounded cursor-pointer ${filters.departureTime.includes('morning') ? 'border-primary' : ''}`}
            onClick={() => handleDepartureTimeChange('morning')}
          >
            <span className="fs-4 mb-1 d-block">🌞</span>
            <span className="fw-medium d-block">Morning</span>
            <span className="small text-muted d-block">6AM - 12PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;