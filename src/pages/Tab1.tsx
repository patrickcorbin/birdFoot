import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import './demo.css';

const Tab1: React.FC = () => {
  return (
    <IonPage className="demo-body">
        <IonContent className="ion-padding demo-container" fullscreen>
          <img className="logo" src="assets/BF_logo.png" alt="Birdfoot Logo" />
          <ExploreContainer name="Tab 1 page" />
        </IonContent>
    </IonPage>
  );
};

export default Tab1;
