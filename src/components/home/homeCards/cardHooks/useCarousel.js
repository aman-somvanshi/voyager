import { useState, useCallback, useRef } from 'react';

const useCarousel = (
  totalItems,
  step = 1,
  visibleItems = 1,
  initialIndex = 0
) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const touchState = useRef({
    startX: 0,
    endX: 0,
    isSwiping: false
  });
  
  // Maximum valid index, ensuring we don't overflow
  const maxIndex = Math.max(0, totalItems - visibleItems);
  
  // Calculate if we're at beginning or end
  const isBeginning = currentIndex <= 0;
  const isEnd = currentIndex >= maxIndex;

  const clamp = useCallback((value, min, max) => {
    return Math.min(Math.max(value, min), max);
  }, []);

  // Move to specific index with boundary check
  const goToIndex = useCallback((index) => {
    setCurrentIndex(clamp(index, 0, maxIndex));
  }, [clamp, maxIndex]);

  // Move backward by step amount
  const handlePrev = useCallback(() => {
    if (!isBeginning) {
      goToIndex(currentIndex - step);
    }
  }, [currentIndex, goToIndex, isBeginning, step]);

  // Move forward by step amount
  const handleNext = useCallback(() => {
    if (!isEnd) {
      goToIndex(currentIndex + step);
    }
  }, [currentIndex, goToIndex, isEnd, step]);

  // Touch handlers for swipe support
  const handleTouchStart = useCallback((e) => {
    touchState.current = {
      startX: e.touches[0].clientX,
      endX: e.touches[0].clientX,
      isSwiping: true
    };
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!touchState.current.isSwiping) return;
    touchState.current.endX = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchState.current.isSwiping) return;
    
    const { startX, endX } = touchState.current;
    const diff = startX - endX;
    
    // Threshold for registering a swipe (50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left - go forward
        handleNext();
      } else {
        // Swiped right - go backward
        handlePrev();
      }
    }
    
    // Reset touch state
    touchState.current.isSwiping = false;
  }, [handleNext, handlePrev]);

  // Reset touch state (useful on resize)
  const resetTouchState = useCallback(() => {
    touchState.current = {
      startX: 0,
      endX: 0,
      isSwiping: false
    };
  }, []);
  
  return {
    currentIndex,
    isBeginning,
    isEnd,
    goToIndex,
    handlePrev,
    handleNext,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    resetTouchState
  };
};

export default useCarousel;