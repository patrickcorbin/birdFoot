import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Info.css';
import './demo.css';

const Info: React.FC = () => {
  return (
    <IonPage className="demo-body">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Information</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding demo-container" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Information</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Info page" /> */}
        <IonList>            
          <IonItem routerLink="/artists">
            <IonLabel>Artists</IonLabel>
          </IonItem>
          <IonItem routerLink="/ItemDetail/2">
            <IonLabel>Locations</IonLabel>
          </IonItem>  
          <IonItem routerLink="/about">
            <IonLabel>About Birdfoot</IonLabel>
          </IonItem>
          <IonItem target="_blank" rel="noopener noreferrer" href='https://birdfootfestival.org/join-us/donate/'>
            <IonLabel>Donate</IonLabel>
          </IonItem>      
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Info;