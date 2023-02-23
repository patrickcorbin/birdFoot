import { IonBackButton, IonButtons, IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Artists.css';
import ArtistItem from '../components/ArtistItem';
// import { artistData } from '../data/schedule.js';
import { useArtists } from '../hooks/useFBQueries';
import ErrorDisplay from '../components/ErrorDisplay';

const Artists: React.FC = () => {

    const { data } = useArtists()

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
          {
            data ? 
            <IonList>
              {artists}
            </IonList> :
            <ErrorDisplay
                message={"Artists not loading right now..."}
            />
          }        
        </IonContent>
      </IonPage>
    );
  };
  
  export default Artists;