import { IonContent, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Info.css';
import './demo.css';

const Info: React.FC = () => {
  return (
    <IonPage className="demo-body">
        <IonContent className="ion-padding demo-container" fullscreen>
          <ExploreContainer name="Info page" />
          <IonList>            
            <IonItem routerLink="/info/Artists">
              <IonLabel>Artists</IonLabel>
            </IonItem>
            <IonItem routerLink="/ItemDetail/2">
              <IonLabel>Locations</IonLabel>
            </IonItem>  
            <IonItem routerLink="/ItemDetail/2">
              <IonLabel>About Birdfoot</IonLabel>
            </IonItem>          
          </IonList>
        </IonContent>
    </IonPage>
  );
};

export default Info;