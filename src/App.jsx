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
import FlightsPage from './components/flights/FlightsList.jsx';
import { AuthProvider } from './auth/authContext.jsx'

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
          <Routes>
              <Route path='/' element={<LoginPage />} /> {/* Root path now renders LoginPage */}
              <Route path='/login' element={<LoginPage/>}></Route> {/* You can keep this for clarity or remove it */}
              <Route path='/signup' element={<RegisterPage/>}></Route>

              {/* Routes that use the MainLayout */}
              <Route element={<MainLayout />}>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/hotel' element={<HotelPage/>}></Route>
                <Route path='/flights' element={<FlightsPage/>}></Route>
              </Route>
            </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App