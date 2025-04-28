import React, { useState } from 'react';
import './Card.css';

const Card = ({ 
  imageUrl, 
  alt = 'Card image'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className="card">
      <div className="card-image-container">
        {!isLoaded && !hasError && (
          <div className="card-image-skeleton"></div>
        )}
        
        {hasError ? (
          <div className="card-image-error">
            <span>Image not available</span>
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={alt}
            className={`card-image ${isLoaded ? 'loaded' : 'loading'}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

export default Card;