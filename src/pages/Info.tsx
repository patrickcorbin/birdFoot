import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Info.css';
import './demo.css';

const Info: React.FC = () => {
  return (
    <IonPage className="demo-body">
        <IonContent className="ion-padding demo-container" fullscreen>
          <ExploreContainer name="Info page" />
        </IonContent>
    </IonPage>
  );
};

export default Info;