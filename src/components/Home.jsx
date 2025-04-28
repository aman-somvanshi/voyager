// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Transport from './Transport'
import SearchBar from './Searchbar'
import More from './More'
function Home() {
  return (
  <>
    <div className="app-container">
    <div className="transport-wrapper">
    <Transport/>
    </div>
    <div className="search-wrapper">
    <SearchBar/>
    </div>
    <div className="more-wrapper">
    <More/>
    </div>
    </div>
    </>
  );
}

export default Home;
