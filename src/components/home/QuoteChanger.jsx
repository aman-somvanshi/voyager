import React, { useState, useEffect } from 'react';

const QuoteChanger = ({ quotes, interval}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, interval);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [quotes.length, interval]);

  return (
    <p className="para">{quotes[currentIndex]}</p>
  );
};

export default QuoteChanger;