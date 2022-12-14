import { IonIcon } from '@ionic/react';
import { heartOutline, location } from 'ionicons/icons';
import './ScheduleItem.css';

interface ContainerProps {
  id?: string;
  artist: string;
  date: string;
  imageFile: string;
  perfLocation: string;
  time: string;
  title: string;
  handleClick: any;
  handleAdd: any;
}

const ScheduleItem: React.FC<ContainerProps> = ({ id, artist, date, imageFile, perfLocation, time, title, handleClick, handleAdd }) => {
  return (
    <div className="schedItem">
      <img className="schedItem__img" src={`./assets/images/${imageFile}`} alt={artist} onClick={handleClick} />
      <div className="schedItem__body"  onClick={handleClick}>
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
      </div>
      <div className="add-container" onClick={handleAdd}>
        <IonIcon className="add-icon icon-purple" icon={heartOutline} />
      </div>
    </div>
  );
};

export default ScheduleItem;