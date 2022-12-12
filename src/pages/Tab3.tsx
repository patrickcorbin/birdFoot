import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import { scheduleData } from '../data/schedule.js'
import ScheduleItemDetail from '../components/ScheduleItemDetail';

const Tab3: React.FC = () => {



  return (
    <IonPage className="demo-body">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="demo-container" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Favorites</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ScheduleItemDetail 
          id={scheduleData[0].id}
          artist={scheduleData[0].artist}
          date={scheduleData[0].date}
          imageFile={scheduleData[0].imageFile}
          perfLocation={scheduleData[0].location}
          time={scheduleData[0].time}
          title={scheduleData[0].title}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
