import { IonItem, IonThumbnail} from '@ionic/react';
import './LocationItem.css';

interface ContainerProps {
  marker: {
    id: string;
    title: string;
    imageFile: string;
    address: string;
};
  line: boolean;
}

const LocationItemLink: React.FC<ContainerProps> = ({ marker, line }) => {

  const { id, title, imageFile, address } = marker

  return (
    <IonItem
        className="sched-item" 
        lines={line ? 'full' : 'none'} 
        detail={false}
        routerLink={`/locations/${id}`}
    >
        <IonThumbnail slot="start">
            <img src={`./assets/images/${imageFile}`} alt={title} />
        </IonThumbnail>
        <div className="sched-item__body" >
            <h2 className="sched-item__body-title">
                {title}
            </h2>
            <p className="sched-item__body-artist">
                {address}
            </p>
        </div>
    </IonItem>
  );
};

export default LocationItemLink;