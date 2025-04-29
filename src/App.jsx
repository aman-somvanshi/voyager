import NavBar from "./components/NavBar.jsx"
import Home from "./components/home/Home.jsx"
import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
// import { Route } from 'lucide-react'
import LoginPage from './auth/LoginPage.jsx'
import RegisterPage from './auth/RegisterPage.jsx'
import HotelPage from "./components/Hotels/HotelPage.jsx";
import HotelSearch from './components/Hotels/HotelSearch.jsx';
import Transport from './components/home/Transport.jsx';
import HotelResults from '../src/components/Hotels/HotelResults.jsx';
import { HotelProvider } from '../src/components/Hotels/HotelContext.jsx';
// import { BrowserRouter,Routes,Route} from 'react-router-dom'

import { AuthProvider } from './auth/authContext.jsx'
import FlightList from "./components/flights/FlightList.jsx"

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
        <HotelProvider>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/login' element={<LoginPage/>}></Route> 
                <Route path='/signup' element={<RegisterPage/>}></Route>

                <Route element={<MainLayout />}>
                  <Route path='/home' element={<Home/>}></Route>
                  <Route path='/hotel' element={<HotelPage/>}></Route>
                  <Route path='/flights' element={<FlightList/>}></Route>
                  <Route path="/hotel-results" element={<HotelResults />} />
                </Route>
              </Routes>
              </HotelProvider>
        </AuthProvider>
      </BrowserRouter>
            
    </>
  )
}

export default App
