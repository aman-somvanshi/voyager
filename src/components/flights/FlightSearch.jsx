import { useState } from 'react'
import FilterSidebar from './FilterSidebar'
import DateSelector from './DateSelector'
import SortOptions from './SortOptions'
import FlightList from './FlightList'
import { flightData, dateOptions } from '../../data/flightData'

const FlightSearch = () => {
  const [selectedDate, setSelectedDate] = useState('Tue, 29 Apr')
  const [selectedSort, setSelectedSort] = useState('smart')
  const [filters, setFilters] = useState({
    stops: [],
    priceRange: [6457, 57843],
    departureTime: []
  })

  

  const filteredFlights = flightData.filter(flight => {
    // Filter by stops
    if (filters.stops.length > 0) {
      if (filters.stops.includes('non-stop') && flight.stops !== 0) return false
      if (filters.stops.includes('1-stop') && flight.stops !== 1) return false
      if (filters.stops.includes('2+-stops') && flight.stops < 2) return false
    }
    
    // Filter by price
    if (flight.price < filters.priceRange[0] || flight.price > filters.priceRange[1]) return false
    
    // Filter by departure time
    if (filters.departureTime.length > 0) {
      const hour = parseInt(flight.departureTime.split(':')[0])
      if (filters.departureTime.includes('early-morning') && (hour < 0 || hour >= 6)) return false
      if (filters.departureTime.includes('morning') && (hour < 6 || hour >= 12)) return false
      // Add more time filters as needed
    }
    
    return true
  })

  // Sort flights
  const sortedFlights = [...filteredFlights].sort((a, b) => {
    if (selectedSort === 'price') return a.price - b.price
    if (selectedSort === 'fastest') return a.duration - b.duration
    if (selectedSort === 'departure') {
      const timeA = parseInt(a.departureTime.split(':').join(''))
      const timeB = parseInt(b.departureTime.split(':').join(''))
      return timeA - timeB
    }
    // Smart recommended (default)
    return a.recommended ? -1 : b.recommended ? 1 : a.price - b.price
  })

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters })
  }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/4">
        <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
      </div>
      <div className="w-full md:w-3/4">
        <div className="bg-white rounded-lg shadow-card overflow-hidden mb-6">
          <DateSelector 
            dates={dateOptions} 
            selectedDate={selectedDate} 
            onDateSelect={setSelectedDate} 
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Sort by</h2>
          <span className="text-gray-500 text-sm">99 Flights Available</span>
        </div>
        <div className="bg-white rounded-lg shadow-card overflow-hidden mb-6">
          <SortOptions 
            selectedSort={selectedSort} 
            onSortChange={setSelectedSort} 
          />
        </div>
        <FlightList flights={sortedFlights} />
      </div>
    </div>
  )
}

export default FlightSearch