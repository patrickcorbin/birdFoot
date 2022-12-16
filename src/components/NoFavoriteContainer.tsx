import './NoFavoriteContainer.css';

const NoFavoriteContainer: React.FC = () => {
  return (
    <div className="no-fav-container">
        <div className="no-fav">
            <h3>No favorites added</h3>
            <p>Add performances to your personal itinerary from the Schedule tab.</p>
        </div>
    </div>
  );
};

export default NoFavoriteContainer;