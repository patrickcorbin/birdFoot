import { IonIcon } from '@ionic/react';
import { location } from 'ionicons/icons';
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
}

const ScheduleItem: React.FC<ContainerProps> = ({ id, artist, date, imageFile, perfLocation, time, title, handleClick }) => {
  return (
    <div className="schedItem" onClick={handleClick}>
      <img className="schedItem__img" src={`./assets/images/${imageFile}`} alt="Mount Fuji" />
      <div className="schedItem__body">
          <h2 className="schedItem__body-title">
              {title}
          </h2>
          <p className="schedItem__body-artist">
              {artist}
          </p>
          <p className="schedItem__body-date">
              {date}
          </p>
          <p className="schedItem__body-date">
              {time}
          </p>
          <div className="schedItem__body-location">
            <IonIcon className="icon-purple" icon={location} />
            <span className="location-text">{perfLocation}</span>
          </div>
      </div>
    </div>
  );
};

export default ScheduleItem;