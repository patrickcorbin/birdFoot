import { IonIcon, IonItem } from '@ionic/react';
import { location } from 'ionicons/icons';
import './LocationItemDetail.css';

interface ContainerProps {
    id?: string;
    imageFile: string;
    name: string;
    address: string;
    neighborhood: string;
    description: string[];
    mapsLink: string;
    website: string | null;
  }
  
  const LocationItemDetail: React.FC<ContainerProps> = ({ imageFile, name, address, neighborhood, description, mapsLink, website }) => {

    // const { artist, imageFile, artistDescription, artistWebsite } = artistObj

    const descriptionDisplay = description?.map(desc => <p key={Math.random()}>{desc}</p>)
    
    return (
      <div className="locationItemDetail">
        <img className="locationItemDetail__img" src={`./assets/images/${imageFile}`} alt={name} />
        <div className="locationItemDetail__body">
            <h2>
                {name}
            </h2>
            <IonItem
                className="itemDetail-item"
                lines='none'
                detail={true}
                // routerLink={`/locations/${mapsLink}`}
                href={mapsLink}
                target="_blank"
            >
                <div className="schedItemDetail__body-location">
                <IonIcon className="icon-purple icon-loc loc-icon-lg" icon={location} />
                <div>
                    <p className="location-text">{address}</p>
                    <p className="location-text">{neighborhood}</p>
                </div>
                </div>
            </IonItem>  
            {descriptionDisplay}
            {
                website && <p>
                    For more information, please visit <a target="_blank" rel="noopener noreferrer" href={website ? website : '#'}>{website}</a>
                </p>
            }
        </div>
      </div>
    );
  };
  
  export default LocationItemDetail;