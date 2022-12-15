import { IonContent, IonItem, IonLabel, IonList, IonPage, IonRouterOutlet } from '@ionic/react';
// import { RouteComponentProps } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import './demo.css';

const Tab1: React.FC = () => {
  return (
    <IonPage className="demo-body">
        <IonContent className="ion-padding demo-container" fullscreen>
          <img className="logo" src="assets/BF_logo.png" alt="Birdfoot Logo" />
          <ExploreContainer name="Tab 1 page" />
          <IonList>            
            <IonItem routerLink="/ItemDetail/1">
              <IonLabel>Item 1</IonLabel>
            </IonItem>
            <IonItem routerLink="/ItemDetail/2">
              <IonLabel>Item 2</IonLabel>
            </IonItem>          
          </IonList>
        </IonContent>
    </IonPage>
  );
};

export default Tab1;
