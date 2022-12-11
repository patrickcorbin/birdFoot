import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ScheduleItem from '../components/ScheduleItem';
import './Tab2.css';
import scheduleData from '../data/schedule.js'

const Tab2: React.FC = () => {
  return (
    <IonPage className="demo-body">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Schedule</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="demo-container" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Schedule</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ScheduleItem 
          id={1} 
          title="test" 
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
