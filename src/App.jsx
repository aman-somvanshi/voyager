import NavBar from "./components/NavBar.jsx";
import Home from "./components/home/Home.jsx";
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import LoginPage from './auth/LoginPage.jsx';
import RegisterPage from './auth/RegisterPage.jsx';
import HotelPage from "./components/Hotels/HotelPage.jsx";
import HotelSearch from './components/Hotels/HotelSearch.jsx';
import Transport from './components/home/Transport.jsx';
import HotelResults from '../src/components/Hotels/HotelResults.jsx';
import { HotelProvider } from '../src/components/Hotels/HotelContext.jsx';
import BookingPage from "../src/components/Hotels/BookingPage.jsx";
import { SearchContextProvider } from '../src/components/Hotels/SearchContext.jsx'; // Import SearchContextProvider
import { AuthProvider } from './auth/authContext.jsx';
import FlightList from "./components/flights/FlightList.jsx";

// Layout component
const MainLayout = () => (
  <>
    <NavBar />
    <Outlet /> {/* This is where the child routes will be rendered */}
  </>
);

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
