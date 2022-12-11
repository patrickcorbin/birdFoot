import { IonIcon } from '@ionic/react';
import { location } from 'ionicons/icons';
import { title } from 'process';
import './ScheduleItem.css';

interface ContainerProps {
  id: number;
  title: string;
}

const ScheduleItem: React.FC<ContainerProps> = ({ id, title }) => {
  return (
    <div className="schedItem">
      <img className="schedItem__img" src={`./assets/images/Jasper-Quartet-2021.jpg`} alt="Mount Fuji" />
      <div className="schedItem__body">
          <div className="schedItem__body-location">
            <IonIcon icon={location} />
              <span className="location-text">Online</span>
              <a className="location-link" href="#">
                  View on Google Maps
              </a>
          </div>
          <h2 className="schedItem__body-title">
              {title}
          </h2>
          <p className="schedItem__body-dates">
              date
          </p>
          <p className="schedItem__body-desc">
              description
          </p>
      </div>
    </div>
  );
};

export default ScheduleItem;