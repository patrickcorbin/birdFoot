import { IonIcon } from '@ionic/react';
import './NoFavoriteContainer.css';
import { search } from 'ionicons/icons';

const NoFavoriteContainer: React.FC = () => {
  return (
    <div className="no-fav-container">
        <div className="no-fav">
          <IonIcon className="icon-purple icon-large" icon={search} />
            <h3>No favorites added</h3>
            <p>Add performances to your personal itinerary from the Schedule tab.</p>
        </div>
    </div>
  );
};

export default NoFavoriteContainer;