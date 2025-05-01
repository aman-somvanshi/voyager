import './App.css';
import { HotelProvider } from '../src/components/Hotels/HotelContext.jsx';
import { AuthProvider} from './auth/authContext.jsx'
import { SearchContextProvider } from '../src/components/Hotels/SearchContext.jsx';
import Routing from "./routing/routing.jsx";

function App() {
  
  return (
    <>
          <HotelProvider> {/* Keep HotelProvider here if it provides hotel data */}
            <SearchContextProvider> {/* Wrap the routes that need search context */}
              <Routing />
            </SearchContextProvider>
          </HotelProvider>
    </>
  );
}

export default App;
