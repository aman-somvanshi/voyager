import FlightCard from './FlightCard'

const FlightList = ({ flights }) => {
  return (
    <div className="space-y-6">
      {flights.map((flight) => (
        <FlightCard 
          key={flight.id} 
          flight={flight} 
        />
      ))}
    </div>
  )
}

export default FlightList