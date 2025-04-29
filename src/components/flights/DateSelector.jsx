import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const DateSelector = ({ dates, selectedDate, onDateSelect }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleDates = dates.slice(startIndex, startIndex + 7);

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + 7 < dates.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="d-flex">
      <button
        onClick={handlePrevious}
        className="d-flex align-items-center justify-content-center border-end border-secondary text-secondary bg-light"
        disabled={startIndex === 0}
        style={{ width: '3rem' }}
      >
        <IoIosArrowBack size={24} />
      </button>
      <div className="flex-grow-1 d-flex">
        {visibleDates.map((date, index) => (
          <div
            key={date.day}
            className={`date-tab text-center p-2 flex-grow-1 cursor-pointer ${date.day === selectedDate ? 'active bg-primary text-white' : ''}`}
            onClick={() => onDateSelect(date.day)}
          >
            <div className="small">{date.day}</div>
            <div className={`fw-bold mt-1 ${date.day === selectedDate ? 'text-white' : ''}`}>
              ₹{date.price}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="d-flex align-items-center justify-content-center border-start border-secondary text-secondary bg-light"
        disabled={startIndex + 7 >= dates.length}
        style={{ width: '3rem' }}
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

export default DateSelector;