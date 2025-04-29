import { useState, useEffect, useRef } from 'react';

const PriceRangeSlider = ({ min, max, value, onChange }) => {
  const [minVal, setMinVal] = useState(value[0]);
  const [maxVal, setMaxVal] = useState(value[1]);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = (value) => {
    return Math.round(((value - min) / (max - min)) * 100);
  };

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange([minVal, maxVal]);
  }, [minVal, maxVal, onChange]);

  return (
    <div className="position-relative">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
        }}
        className="position-absolute w-100 bg-secondary-subtle form-range appearance-none z-3"
        style={{
          zIndex: 3,
          height: '5px',
          borderRadius: '5px',
          background: 'transparent',
          pointerEvents: 'none',
        }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
        }}
        className="position-absolute w-100 bg-secondary-subtle form-range appearance-none z-4"
        style={{
          zIndex: 4,
          height: '5px',
          borderRadius: '5px',
          background: 'transparent',
          pointerEvents: 'none',
        }}
      />

      <div className="position-relative w-100 h-1 rounded bg-secondary-subtle">
        <div
          ref={range}
          className="position-absolute h-1 rounded bg-primary"
        />
      </div>

      <div className="position-relative">
        <div
          style={{
            left: `${getPercent(minVal)}%`,
            transform: 'translateX(-50%)',
            zIndex: 5,
          }}
          className="position-absolute w-4 h-4 bg-primary rounded-circle top-[-8px] cursor-pointer"
        />
        <div
          style={{
            left: `${getPercent(maxVal)}%`,
            transform: 'translateX(-50%)',
            zIndex: 5,
          }}
          className="position-absolute w-4 h-4 bg-primary rounded-circle top-[-8px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;