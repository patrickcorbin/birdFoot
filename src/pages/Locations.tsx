import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Locations.css';

const Locations: React.FC = () => {
  
    return (
      <IonPage className="demo-body">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton text="Back" defaultHref='/info' />
            </IonButtons>
            <IonTitle>Locations</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="demo-container" fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Locations</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div className="location-container">
            
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Locations;