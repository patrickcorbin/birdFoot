import { IonIcon, IonItem } from '@ionic/react';
import { heart, heartOutline, location } from 'ionicons/icons';
import './ScheduleItemDetail.css';

interface ContainerProps {
    id?: string;
    artist: string;
    artistID: string;
    date: string;
    imageFile: string;
    perfLocation: string;
    locationID: string;
    time: string;
    title: string;
    program: Array<any>;
    description: Array<any>;
    handleAdd: any;
    handleRemove: any;
    isFavorite: boolean;

    handleClose?: any;
  }
  
  const ScheduleItemDetail: React.FC<ContainerProps> = ({ id, artist, artistID, date, imageFile, locationID, perfLocation, time, title, program, description, isFavorite, handleAdd, handleRemove }) => {
    
    const programDisplay = program.map(prog => <p key={Math.random()}>{prog.artist && (<b>{prog.artist}:</b>)} {prog.piece}</p> )

    const descriptionDisplay = description.map(desc => <p key={Math.random()}>{desc}</p>)
    
    return (
      <div className="schedItemDetail">
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
              ></IonIcon>
            </div>
            <IonItem
              className="itemDetail-item"
              lines='none'
              detail={false}
              routerLink={`/artists/${artistID}`}  
            >
              <h3 className="schedItemDetail__body-artist">
                  {artist}
              </h3>
            </IonItem>
            <div className="schedItemDetail__body-date">
                <div>{date}</div>
                <div>{time}</div>
            </div>
            <IonItem
              className="itemDetail-item"
              lines='none'
              detail={false}
              routerLink={`/locations/${locationID}`}
            >
              <div className="schedItemDetail__body-location">
                <IonIcon className="icon-purple" icon={location} />
                <span className="location-text">{perfLocation}</span>
              </div>
            </IonItem>
            <h3 className="schedItemDetail__description-title">Program:</h3>
            <p>Selections from</p>
            {programDisplay}
            {descriptionDisplay}
        </div>
      </div>
    );
  };
  
  export default ScheduleItemDetail;