import { IonButton, IonIcon, IonItem } from '@ionic/react';
import { heart, heartOutline, location } from 'ionicons/icons';
import './ScheduleItemDetail.css';

interface ContainerProps {
    id?: string;
    artists: Array<any>;
    date: string;
    imageFile: string;
    locations?: Array<any>;
    time: string;
    title: string;
    titleFull?: Array<any>;
    description: Array<any>;
    price?: Array<any>;
    program?: Array<any>;
    reservationLink?: string;
    reservationText?: string;
    handleAdd: any;
    handleRemove: any;
    isFavorite: boolean;

    handleClose?: any;
  }
  
    const ScheduleItemDetail: React.FC<ContainerProps> = ({ artists, date, imageFile, locations, time, title, titleFull, description, price, program, reservationLink, reservationText, isFavorite, handleAdd, handleRemove }) => {

    const titleDisplay = titleFull?.map(line => <h2 className="scheduleItemDetail__body-title-main" key={Math.random()}>{line}</h2>)
    
    const artistDisplay = artists?.map(artist => {
      return (
              <IonItem
                    className="itemDetail-item"
                    lines='none'
                    detail={true}
                    routerLink={`/artists/${artist.artistId}`}  
              >
                <p className="schedItemDetail__body-artist">
                    {artist.artistName}
                </p>
              </IonItem>
            )
    })

    const locationDisplay = locations?.map(loc => {
      return (
        <>
          {loc.locationLabel && <h4 className="schedItemDetail__description-title-location">{loc.locationLabel}</h4>}
          <IonItem
            className="itemDetail-item"
            lines='none'
            detail={true}
            routerLink={`/locations/${loc.locationId}`}
          >
            <div className="schedItemDetail__body-location">
              <IonIcon className="icon-purple" icon={location} />
              <span className="location-text">{loc.locationName}</span>
            </div>
          </IonItem>  
        </>
      )
    })


    const programDisplay = program?.map(prog => <p key={Math.random()}>{prog.artist && (<b>{prog.artist}:</b>)} {prog.piece}</p> )

    const priceDisplay = price?.map(price => <p key={Math.random()}>{price}</p>)

    const descriptionDisplay = description.map(desc => <p key={Math.random()}>{desc}</p>)
    
    return (
      <div className="schedItemDetail">
        <img className="schedItemDetail__img" src={`./assets/images/${imageFile}`} alt={title} />
        <div className="schedItemDetail__body">
            <div className="schedItemDetail__body-title">
              <div>
                  {titleDisplay}
              </div>
              <div className="icon-container">
                <IonIcon 
                  className="add-icon icon-purple" 
                  onClick={isFavorite ? handleRemove : handleAdd}
                  icon={isFavorite ? heart : heartOutline}
                ></IonIcon>
              </div>
            </div>
            {artistDisplay}
            <div className="schedItemDetail__body-date">
                <div>{date}</div>
                <div>{time}</div>
            </div>
            {locationDisplay}
            {price && <h3 className="schedItemDetail__description-title">Price:</h3>}
            {priceDisplay}
            {reservationLink && <IonButton color="primary" size='default' expand='block' href={reservationLink} target="_blank">
                                  {reservationText}
                                </IonButton>}
            <h3 className="schedItemDetail__description-title">{program ? 'Program:' : 'Description:'}</h3>
            {program && <p>Selections from</p>}
            {programDisplay}
            {descriptionDisplay}
        </div>
      </div>
    );
  };
  
  export default ScheduleItemDetail;