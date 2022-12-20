import { IonItem, IonThumbnail} from '@ionic/react';
import './ArtistItem.css';

interface ContainerProps {
  id?: string;
  artist: string;
  imageFile: string;
}

const ArtistItem: React.FC<ContainerProps> = ({ id, artist, imageFile }) => {
  return (
    <IonItem 
        className="sched-item" 
        lines='full' 
        detail={false} 
        href={`/artists/${id}`}
    >
          <IonThumbnail slot="start">
            <img src={`./assets/images/${imageFile}`} alt={artist} />
          </IonThumbnail>
          <div className="sched-item__body" >
            <h2 className="sched-item__body-title">
                {artist}
            </h2>
          </div>
      </IonItem>
    // <div className="artistItem">
    //   <IonRouterLink className="artistItem__link" href={`/artists/${id}`}>
    //     <div className="artistItem__container">
    //       <img className="artistItem__img" src={`./assets/images/${imageFile}`} alt={artist} />
    //       <div className="artistItem__body" >
    //           <h2 className="artistItem__body-title">
    //               {artist}
    //           </h2>
    //         </div>
    //       </div>
    //   </IonRouterLink>
    // </div>
  );
};

export default ArtistItem;