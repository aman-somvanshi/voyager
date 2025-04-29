import { IoIosArrowDown } from 'react-icons/io';

const SortOptions = ({ selectedSort, onSortChange }) => {
  return (
    <div className="d-flex border-bottom border-secondary-subtle">
      <div
        className={`sort-option flex-grow-1 text-center p-3 cursor-pointer ${selectedSort === 'price' ? 'border-bottom border-2 border-primary text-primary' : ''}`}
        onClick={() => onSortChange('price')}
      >
        <div className="fw-medium">Price</div>
        <div className="small text-muted">Low to High</div>
      </div>

      <div
        className={`sort-option flex-grow-1 text-center p-3 cursor-pointer ${selectedSort === 'fastest' ? 'border-bottom border-2 border-primary text-primary' : ''}`}
        onClick={() => onSortChange('fastest')}
      >
        <div className="fw-medium">Fastest</div>
        <div className="small text-muted">Shortest First</div>
      </div>

      <div
        className={`sort-option flex-grow-1 text-center p-3 cursor-pointer ${selectedSort === 'departure' ? 'border-bottom border-2 border-primary text-primary' : ''}`}
        onClick={() => onSortChange('departure')}
      >
        <div className="fw-medium">Departure</div>
        <div className="small text-muted">Earliest First</div>
      </div>

      <div
        className={`sort-option flex-grow-1 d-flex flex-column align-items-center text-primary p-3 cursor-pointer ${selectedSort === 'smart' ? 'border-bottom border-2 border-primary' : ''}`}
        onClick={() => onSortChange('smart')}
      >
        <div className="fw-medium d-flex align-items-center">
          Smart <IoIosArrowDown className="ms-1" />
        </div>
        <div className="small">Recommended</div>
      </div>
    </div>
  );
};

export default SortOptions;