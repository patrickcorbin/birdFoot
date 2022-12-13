import { IonHeader, IonIcon, IonToolbar, IonButtons, IonButton } from '@ionic/react';
import { close, location } from 'ionicons/icons';
import './ScheduleItemDetail.css';

interface ContainerProps {
    id?: string;
    artist: string;
    date: string;
    imageFile: string;
    perfLocation: string;
    time: string;
    title: string;
    program: Array<any>;
    description: Array<any>;
    handleClose?: any;
  }
  
  const ScheduleItemDetail: React.FC<ContainerProps> = ({ id, artist, date, imageFile, perfLocation, time, title, program, description, handleClose }) => {
    
    const programDisplay = program.map(prog => <p><b>{prog.artist}:</b> {prog.piece}</p> )

    const descriptionDisplay = description.map(desc => <p>{desc}</p>)
    
    return (
      <div className="schedItemDetail">
        <IonHeader>
            <IonToolbar className="schedItemDetail__toolbar">
                <IonButtons slot="end">
                    <IonButton onClick={handleClose} shape="round">
                        <IonIcon icon={close} />
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <img className="schedItemDetail__img" src={`./assets/images/${imageFile}`} alt={artist} />
        <div className="schedItemDetail__body">
            <h2 className="schedItemDetail__body-title">
                {title}
            </h2>
            <h3 className="schedItemDetail__body-artist">
                {artist}
            </h3>
            <div className="schedItemDetail__body-date">
                <div>{date}</div>
                <div>{time}</div>
            </div>
            <div className="schedItemDetail__body-location">
              <IonIcon className="icon-purple" icon={location} />
              <span className="location-text">{perfLocation}</span>
            </div>
            <h3>Program:</h3>
            <p>Selections from</p>
            {programDisplay}
            {descriptionDisplay}
        </div>
      </div>
    );
  };
  
  export default ScheduleItemDetail;