import { IonIcon } from '@ionic/react';
import { heart, heartOutline, location } from 'ionicons/icons';
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
    handleAdd: any;
    handleRemove: any;
    isFavorite: boolean;

    handleClose?: any;
  }
  
  const ScheduleItemDetail: React.FC<ContainerProps> = ({ id, artist, date, imageFile, perfLocation, time, title, program, description, isFavorite, handleAdd, handleRemove }) => {
    
    const programDisplay = program.map(prog => <p>{prog.artist && (<b>{prog.artist}:</b>)} {prog.piece}</p> )

    const descriptionDisplay = description.map(desc => <p>{desc}</p>)
    
    return (
      <div className="schedItemDetail">
        {/* <IonHeader>
            <IonToolbar className="schedItemDetail__toolbar">
                <IonButtons slot="end">
                    <IonButton onClick={handleClose} shape="round">
                        <IonIcon icon={close} />
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader> */}
        <img className="schedItemDetail__img" src={`./assets/images/${imageFile}`} alt={artist} />
        <div className="schedItemDetail__body">
            <div className="schedItemDetail__body-title">
              <h2>
                  {title}
              </h2>
              <IonIcon 
                className="add-icon icon-purple" 
                onClick={isFavorite ? handleRemove : handleAdd}
                icon={isFavorite ? heart : heartOutline} 
              />
            </div>
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