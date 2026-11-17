import { useState } from 'react'
import Header from './components/Header'
//import DestinationList from './components/DestinationList'
//import DestinationCard from './components/DestinationCard'
//import BookingForm from './components/BookingForm'

import './styles/App.css'

const destinations = [
  { id: 1, name: 'Paris', description: 'The city of light.', price: 1200 },
  { id: 2, name: 'Tokyo', description: 'The land of the rising sun.', price: 1500 },
  { id: 3, name: 'New York', description: 'The city that never sleeps.', price: 1000 },
  { id: 4, name: 'Sydney', description: 'Famous for its opera house.', price: 1800 },
  { id: 5, name: 'London', description: 'The capital of England.', price: 1100 },
  { id: 6, name: 'Rome', description: 'The eternal city with rich history.', price: 1300 },
  { id: 7, name: 'Barcelona', description: 'Famous for its architecture and beaches.', price: 1400 },
  { id: 8, name: 'Dubai', description: 'A modern city with luxurious experiences.', price: 2000 },
  { id: 9, name: 'Istanbul', description: 'Where East meets West with vibrant culture.', price: 1100 },
  { id: 10, name: 'Rio de Janeiro', description: 'Known for its carnival and beautiful beaches.', price: 1600 }
];

function App() {
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <div className='app'>
      <Header/>
      {/* 
      <DestinationList
      destinations={destinations}
      setSelectedDestination={setSelectedDestination}
      />
      {selectedDestination && (
        <BookingForm
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}

*/}
    
    </div>
  )
}

export default App

