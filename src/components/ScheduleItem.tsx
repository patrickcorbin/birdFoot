import { IonIcon, IonRouterLink } from '@ionic/react';
import { heart, heartOutline, location } from 'ionicons/icons';
import './ScheduleItem.css';

interface ContainerProps {
  id?: string;
  artist: string;
  date: string;
  imageFile: string;
  perfLocation: string;
  time: string;
  title: string;
  isFavorite: boolean;
  handleClick: any;
  handleAdd: any;
  handleRemove: any;
}

const ScheduleItem: React.FC<ContainerProps> = ({ id, artist, date, imageFile, perfLocation, time, title, isFavorite, handleClick, handleAdd, handleRemove }) => {
  return (
    <div className="schedItem">
      <img className="schedItem__img" src={`./assets/images/${imageFile}`} alt={artist} />
      <div className="schedItem__body" >
        <IonRouterLink className="schedItem__link" href={`/ItemDetail/${id}`}>
          <h2 className="schedItem__body-title">
              {title}
          </h2>
          <p className="schedItem__body-artist">
              {artist}
          </p>
          <p className="schedItem__body-date">
              {date}, {time}
          </p>
          <p className="schedItem__body-date">
              
          </p>
          <div className="schedItem__body-location">
            <IonIcon className="icon-purple" icon={location} />
            <span className="location-text">{perfLocation}</span>
          </div>
        </IonRouterLink>
      </div>
      <div className="add-container" onClick={isFavorite ? handleRemove : handleAdd}>
        <IonIcon className="add-icon icon-purple" icon={isFavorite ? heart : heartOutline} />
      </div>
    </div>
  );
};

export default ScheduleItem;