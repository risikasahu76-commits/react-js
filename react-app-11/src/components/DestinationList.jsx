
import DestinationCard from './DestinationCard';
import '../styles/DestinationList.css';

function DestinationList({ destinations, setSelectedDestination }) {
  return (
    <div className="destination-list">
      <h2>Available Destinations</h2>
      <div className="destination-items">
        {destinations.map(destination => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            onSelect={() => setSelectedDestination(destination)}
          />
        ))}
      </div>
    </div>
  );
}

export default DestinationList;
