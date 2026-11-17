import '../styles/DestinationCard.css';

function DestinationCard({ destination, onSelect }) {
  return (
    <div className="destination-card" onClick={onSelect}>
      <h3>{destination.name}</h3>
      <p>{destination.description}</p>
      <p><strong>Price:</strong> ${destination.price}</p>
    </div>
  );
}

export default DestinationCard;
