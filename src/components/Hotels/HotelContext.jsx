import React, { createContext, useState, useEffect } from 'react';

export const HotelContext = createContext();

export const HotelProvider = ({ children }) => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHotels = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('http://localhost:3000/hotels'); // Assuming your JSON Server is running on port 3001
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                // console.log('Data fetched from JSON Server:', data);
                setHotels(data);
                setLoading(false);
            } catch (e) {
                setError(e.message);
                setLoading(false);
            }
        };

        fetchHotels();
    }, []);

    return (
        <HotelContext.Provider value={{ hotels, loading, error }}>
            {children}
        </HotelContext.Provider>
    );
};