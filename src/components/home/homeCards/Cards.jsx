import React from 'react';
import CardCarousel from './cardCarousel/CardCarousel';

const cardData = [
    {
      id: 1,
      imageUrl: './src/assets/cards/image1.png',
      alt: 'Offers on your bookings'
    },
    {
      id: 2,
      imageUrl: './src/assets/cards/image2.png',
      alt: 'Offers on your bookings'
    },
    {
      id: 3,
      imageUrl: './src/assets/cards/image3.png',
      alt: 'Offers on your bookings'
    },
  
    {
      id: 5,
      imageUrl: './src/assets/cards/image5.png',
      alt: 'Offers on your bookings'
    },
    {
      id: 6,
      imageUrl: './src/assets/cards/image6.png',
      // title: 'Lakeside View',
      // description: 'Peaceful lake surrounded by mountains',
      alt: 'Offers on your bookings'
    },
    {
      id: 7,
      imageUrl: './src/assets/cards/image7.png',
      // title: 'Autumn Road',
      // description: 'Country road with fall foliage',
      alt: 'Offers on your bookings'
    },
    {
      id: 8,
      imageUrl: './src/assets/cards/image4.png',
      // title: 'Tropical Island',
      // description: 'Pristine tropical island paradise',
      alt: 'Offers on your bookings'
    }
  ];

function Cards(){

    return (
    <>
        <div>
            <>

                <CardCarousel cards={cardData} title="Today's Flight Offers" />
            </>
        </div>
    </>
    )
}

export default Cards;