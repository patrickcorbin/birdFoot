import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
        <IonList>            
          <IonItem routerLink="/artists">
            {/* <IonIcon className="icon-purple" icon={search} slot="start" /> */}
            <h2>Artists</h2>
          </IonItem>
          <IonItem routerLink="/locations">
            <h2>Locations</h2>
          </IonItem>  
          <IonItem routerLink="/about">
            <h2>About Birdfoot</h2>
          </IonItem>
          <IonItem target="_blank" rel="noopener noreferrer" href='https://birdfootfestival.org/join-us/donate/'>
            <h2>Donate</h2>
          </IonItem>
          <IonItem routerLink="/sponsors">
            <h2>Our Sponsors</h2>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Info;