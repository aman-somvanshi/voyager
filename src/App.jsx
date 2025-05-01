import NavBar from "./components/NavBar.jsx";
import Home from "./components/home/Home.jsx";
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import LoginPage from './auth/LoginPage.jsx';
import RegisterPage from './auth/RegisterPage.jsx';
import HotelPage from "./components/Hotels/HotelPage.jsx";
import HotelResults from '../src/components/Hotels/HotelResults.jsx';
import { HotelProvider } from '../src/components/Hotels/HotelContext.jsx';
import BookingPage from "../src/components/Hotels/BookingPage.jsx"
import { AuthProvider, useAuth } from './auth/authContext.jsx'
import { SearchContextProvider } from '../src/components/Hotels/SearchContext.jsx';
import FlightList from "./components/flights/FlightList.jsx"
import { useState, useEffect } from "react"

// Layout component
const MainLayout = () => {
  const {user, loading}= useAuth();
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

  if (loading) {
    return <div>Loading user data...</div>;
  }
  if(!user) {
    return (
      <>
        <div>Please log in to view this page.</div>
      </>
    )
  }
  
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

function App() {
  
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <HotelProvider> {/* Keep HotelProvider here if it provides hotel data */}
            <SearchContextProvider> {/* Wrap the routes that need search context */}
              <Routes>
                <Route path='/' element={<LoginPage />} /> {/* Root path now renders LoginPage */}
                <Route path='/login' element={<LoginPage />} /> {/* You can keep this for clarity or remove it */}
                <Route path='/signup' element={<RegisterPage />} />

                {/* Routes that use the MainLayout and need search context */}
                <Route element={<MainLayout />}>
                  <Route path='/home' element={<Home />} />
                  <Route path='/hotel' element={<HotelPage />} /> {/* HotelSearch is inside HotelPage */}
                  <Route path='/flights' element={<FlightList />} />
                  <Route path="/hotel-results" element={<HotelResults />} />
                  <Route path="/booking/:id" element={<BookingPage />} />
                </Route>
              </Routes>
            </SearchContextProvider>
          </HotelProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
