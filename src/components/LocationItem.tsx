import { IonItem, IonThumbnail} from '@ionic/react';
import './LocationItem.css';

interface ContainerProps {
//   id?: string;
//   title: string;
//   imageFile: string;
//   address: string;
    marker: {
        id: string;
        title: string;
        imageFile: string;
        address: string;
    };
  line: boolean;
  dismiss?: any;
}

const LocationItem: React.FC<ContainerProps> = ({ marker, line, dismiss }) => {
  return (
    <IonItem
        className="sched-item" 
        lines={line ? 'full' : 'none'} 
        detail={false}
    >
        <IonThumbnail slot="start">
            <img src={`./assets/images/${marker.imageFile}`} alt={marker.title} />
        </IonThumbnail>
        <div className="sched-item__body" >
            <h2 className="sched-item__body-title">
                {marker.title}
            </h2>
            <p className="sched-item__body-artist">
                {marker.address}
            </p>
        </div>
    </IonItem>
  );
};

export default LocationItem;