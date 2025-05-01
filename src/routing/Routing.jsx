import NavBar from "./../components/NavBar.jsx";
import Home from "./../components/home/Home.jsx";
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import LoginPage from './../auth/LoginPage.jsx';
import RegisterPage from './../auth/RegisterPage.jsx';
import HotelPage from "./../components/Hotels/HotelPage.jsx";
import HotelResults from './../components/Hotels/HotelResults.jsx';
import BookingPage from "./../components/Hotels/BookingPage.jsx"
import FlightList from "./../components/flights/FlightList.jsx"
import { useState, useEffect } from "react"
import PrivateRoute from "./../auth/PrivateRoute.jsx";
import { AuthProvider, useAuth } from "../auth/authContext.jsx";
import './Routing.css'
// Layout component
const MainLayout = () => {
    const {user}= useAuth();
    const [typedText, setTypedText] = useState('');
    const fullText = user ? `Hello ${user.name}` : '';
    const typingSpeed = 100; // Adjust for typing speed (milliseconds per letter)
  
    useEffect(() => {
      if (user && fullText.length > 0 && typedText.length < fullText.length) {
        const timer = setTimeout(() => {
          setTypedText((prevText) => prevText + fullText[prevText.length]);
        }, typingSpeed);
        return () => clearTimeout(timer); // Cleanup the timer
      } else if (!user) {
        setTypedText(''); // Clear text if user logs out or is not logged in
      }
    }, [user, fullText, typedText]);
    
    return (
      <>
      <NavBar />
      <div style={{ marginTop: "5rem" }}>
        <div className='name-container'>
            {typedText}
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
    );
};


const Routing = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<LoginPage />} /> {/* Root path now renders LoginPage */}
                    <Route path='/login' element={<LoginPage />} /> {/* You can keep this for clarity or remove it */}
                    <Route path='/signup' element={<RegisterPage />} />

                    {/* Routes that use the MainLayout and need search context */}
                    <Route element={<PrivateRoute>
                    <MainLayout/>
                    </PrivateRoute>}>
                    <Route path='/home' element={<Home />} />
                    <Route path='/hotel' element={<HotelPage />} /> {/* HotelSearch is inside HotelPage */}
                    <Route path='/flights' element={<FlightList />} />
                    <Route path="/hotel-results" element={<HotelResults />} />
                    <Route path="/booking/:id" element={<BookingPage />} />
                    </Route>
                    <Route path="*" element={<div>404 Page Not Found</div>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default Routing;