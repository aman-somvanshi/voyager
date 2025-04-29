import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from "./components/NavBar.jsx"
import Home from "./components/home/Home.jsx"
import './App.css'
import HotelPage from "./components/Hotels/HotelPage.jsx";
import HotelSearch from './components/Hotels/HotelSearch.jsx'
import Transport from './components/home/Transport.jsx'

function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    </>
  )
}

export default App
