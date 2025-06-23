import './App.css';
import { HotelProvider } from '../src/components/Hotels/HotelContext.jsx';
import { AuthProvider} from './auth/authContext.jsx'
import { FlightContextProvider } from '../src/components/flights/SearchFlightContext.jsx';
import { SearchContextProvider } from '../src/components/Hotels/SearchContext.jsx';
import Routing from "./routing/Routing.jsx";

function App() {
  
  return (
    <>
      <HotelProvider>
        <FlightContextProvider>
          <SearchContextProvider>
            <Routing />
          </SearchContextProvider>
        </FlightContextProvider>
      </HotelProvider>
    </>
  );
}

export default App;
