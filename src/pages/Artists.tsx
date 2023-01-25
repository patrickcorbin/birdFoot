import { IonBackButton, IonButtons, IonContent, IonHeader, IonList, IonLoading, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Artists.css';
import ArtistItem from '../components/ArtistItem';
// import { artistData } from '../data/schedule.js';
import { useArtists } from '../hooks/useFBQueries';

const Artists: React.FC = () => {

    const { isLoading, data } = useArtists()

    const artists = data?.map((item: any) => {
      return (
        <ArtistItem 
          key={item.id}
          item={item}
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
        <IonContent className="ion-padding demo-container" fullscreen>
          <IonLoading 
            isOpen={isLoading}
          />
          <IonList>
            {artists}
          </IonList>          
        </IonContent>
      </IonPage>
    );
  };
  
  export default Artists;