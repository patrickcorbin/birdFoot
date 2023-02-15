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

const LocationItemLink: React.FC<ContainerProps> = ({ marker, line }) => {

  const { id, name, imageFile, address, neighborhood } = marker

  return (
    <IonItem
        className="sched-item" 
        lines={line ? 'full' : 'none'} 
        detail={false}
        routerLink={`/locations/${id}`}
    >
        <IonThumbnail slot="start">
            <img src={`./assets/images/${imageFile}`} alt={name} />
        </IonThumbnail>
        <div className="sched-item__body" >
            <h2 className="sched-item__body-title">
                {name}
            </h2>
            <p className="sched-item__body-artist">
                {address}
            </p>
            <p className="sched-item__body-artist">
                {neighborhood}
            </p>
        </div>
    </IonItem>
  );
};

export default LocationItemLink;