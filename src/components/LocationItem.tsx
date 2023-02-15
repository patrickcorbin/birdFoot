import { IonItem, IonThumbnail} from '@ionic/react';
import './LocationItem.css';

interface ContainerProps {
    marker: {
        id: string;
        name: string;
        imageFile: string;
        address: string;
        neighborhood: string;
    };
  line: boolean;
}

const LocationItem: React.FC<ContainerProps> = ({ marker, line }) => {
  return (
    <IonItem
        className="sched-item" 
        lines={line ? 'full' : 'none'} 
        detail={false}
    >
        <IonThumbnail slot="start">
            <img src={`./assets/images/${marker.imageFile}`} alt={marker.name} />
        </IonThumbnail>
        <div className="sched-item__body" >
            <h2 className="sched-item__body-title">
                {marker.name}
            </h2>
            <p className="sched-item__body-artist">
                {marker.address}
            </p>
            <p className="sched-item__body-artist">
                {marker.neighborhood}
            </p>
        </div>
    </IonItem>
  );
};

export default LocationItem;