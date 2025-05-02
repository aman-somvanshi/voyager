import './App.css';
import { HotelProvider } from '../src/components/Hotels/HotelContext.jsx';
import { AuthProvider} from './auth/authContext.jsx'
import { SearchContextProvider } from '../src/components/Hotels/SearchContext.jsx';
import Routing from "./routing/routing.jsx";

function App() {
  
  return (
    <>
          <HotelProvider>
            <SearchContextProvider>
              <Routing />
            </SearchContextProvider>
          </HotelProvider>
    </>
  );
}

export default App;
