import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Artists.css';
import ArtistItem from '../components/ArtistItem';
import { artistData } from '../data/schedule.js'

const Artists: React.FC = () => {
  
    const artists = artistData.map(item => {
      return (
        <ArtistItem 
          key={item.id}
          id={item.id}
          artist={item.artist}
          imageFile={item.imageFile}
        />
      )
    })
  
    return (
      <IonPage className="demo-body">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton text="Back" defaultHref='/info' />
            </IonButtons>
            <IonTitle>Artists</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="demo-container" fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Artists</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div className="schedule-container">
            {artists}
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Artists;