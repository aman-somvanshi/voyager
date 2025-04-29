import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from "./components/NavBar.jsx"
import Home from "./components/home/Home.jsx"
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Route } from 'lucide-react'
import LoginPage from './auth/LoginPage.jsx'
import RegisterPage from './auth/RegisterPage.jsx'
import HotelPage from "./components/Hotels/HotelPage.jsx";
import HotelSearch from './components/Hotels/HotelSearch.jsx';
import Transport from './components/home/Transport.jsx';
import FlightsPage from './components/flights/FlightsList.jsx';

function App() {
  return (
    <>
      <NavBar/>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/signup' element={<RegisterPage/>}></Route> 
        <Route path='/hotel' element={<HotelPage/>}></Route> 
        <Route path='/flights' element={<FlightsPage/>}></Route> 
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
