import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Artists.css';
import { scheduleData } from '../data/schedule.js'

const Artists: React.FC = () => {
  
    const schedule = scheduleData.map(item => {
      return (
        <h3>{item.artist}</h3>
      )
    })
  
    return (
      <IonPage className="demo-body">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Artists</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="demo-container" fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Schedule</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div className="schedule-container">
            {schedule}
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Artists;