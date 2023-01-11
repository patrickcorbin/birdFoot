import { IonIcon, IonItem, IonThumbnail} from '@ionic/react';
import { heart, heartOutline, location } from 'ionicons/icons';
import './ScheduleIonItem.css';

interface ContainerProps {
  id?: string;
  parentPage?: string;
  artist: string;
  date: string;
  imageFile: string;
  perfLocation: string;
  time: string;
  title: string;
  isFavorite: boolean;
  handleClick?: any;
  handleAdd: any;
  handleRemove: any;
}

const ScheduleIonItem: React.FC<ContainerProps> = ({ id, parentPage, artist, date, imageFile, perfLocation, time, title, isFavorite, handleAdd, handleRemove }) => {
  return (
    <IonItem 
        className="sched-item" 
        lines='full' 
        detail={false}
        routerLink={`/${parentPage}/item/${id}`}
    >
          <IonThumbnail slot="start">
            <img src={`./assets/images/${imageFile}`} alt={artist} />
          </IonThumbnail>
          <IonIcon 
            className="icon-purple"
            slot="end"
            icon={isFavorite ? heart : heartOutline}
            onClick={isFavorite ? handleRemove : handleAdd}
          ></IonIcon>
          <div className="sched-item__body">
            <h2 className="sched-item__body-title">
                {title}
            </h2>
            <p className="sched-item__body-artist">
                {artist}
            </p>
            <p className="sched-item__body-date">
                {date}, {time}
            </p>
            <div className="sched-item__body-location">
              <IonIcon className="icon-purple icon-loc" icon={location} />
              <span className="location-text">{perfLocation}</span>
            </div>
          </div>
      </IonItem>
  );
};

export default ScheduleIonItem;