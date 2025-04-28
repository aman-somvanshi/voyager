import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from './Card';

import './CardCarousel.css';
import useCarousel from '../card-hooks/useCarousel';

const CardCarousel = ({ cards = [], title = 'Featured Cards' }) => {
  const carouselRef = useRef(null);
  const { 
    currentIndex,
    isBeginning,
    isEnd,
    handlePrev,
    handleNext,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    resetTouchState
  } = useCarousel(cards.length, 2, 4);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      resetTouchState();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [resetTouchState]);

  // No cards to display
  if (cards.length === 0) {
    return <div className="card-carousel-empty">No cards available</div>;
  }

  return (
    <>
    {title && <h2 className="card-carousel-title">{title}</h2>}
    <div className="card-carousel-container">
    
      <div className="card-carousel-wrapper">
        <button 
          className={`card-carousel-arrow card-carousel-arrow-left ${isBeginning ? 'disabled' : ''}`}
          onClick={handlePrev}
          disabled={isBeginning}
          aria-label="Previous cards"
        >
          <ChevronLeft size={24} />
        </button>

        <div 
          className="card-carousel-content"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Card carousel"
          tabIndex={0}
        >
          <div 
            className="card-carousel-track"
            style={{ 
              transform: `translateX(-${currentIndex * (25)}%)`,
              transition: 'transform 0.5s ease'  
            }}
          >
            {cards.map((card, index) => (
              <div className="card-carousel-item" key={card.id || index}>
                <Card 
                  imageUrl={card.imageUrl}
                  title={card.title}
                  description={card.description}
                  alt={card.alt || `Card ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        <button 
          className={`card-carousel-arrow card-carousel-arrow-right ${isEnd ? 'disabled' : ''}`}
          onClick={handleNext}
          disabled={isEnd}
          aria-label="Next cards"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
    </>
  );
};

export default CardCarousel;