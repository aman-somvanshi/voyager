import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from "./components/NavBar.jsx"
import Home from "./components/home/Home.jsx"
import './App.css'

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
    </>
  )
}

export default App
