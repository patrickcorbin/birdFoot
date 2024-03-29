import { IonItem, IonThumbnail} from '@ionic/react';
import './ArtistItem.css';

interface ContainerProps {
  item: {
    id: string;
    artist?: string;
    name: string;
    imageFile: string;
    specialty: string;
  }
}

const ArtistItem: React.FC<ContainerProps> = ({ item }) => {

  const { id, name, imageFile, specialty } = item

  return (
    <IonItem 
        className="sched-item" 
        lines='full' 
        detail={false} 
        routerLink={`/artists/${id}`}
    >
          <IonThumbnail slot="start">
            <img src={`./assets/images/${imageFile}`} alt={name} />
          </IonThumbnail>
          <div className="sched-item__body" >
            <h2 className="sched-item__body-title">
                {name}
            </h2>
            <p className="sched-item__body-artist">
                {specialty}
            </p>
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