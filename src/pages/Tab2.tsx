import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ScheduleItem from '../components/ScheduleItem';
import './Tab2.css';
import { scheduleData } from '../data/schedule.js'

const Tab2: React.FC = () => {

  function testFn(x: string) {
    alert(`item ${x} clicked`)
  }

  const schedule = scheduleData.map(item => {
    return (
      <ScheduleItem 
        key={item.id}
        id={item.id}
        artist={item.artist}
        date={item.date}
        imageFile={item.imageFile}
        perfLocation={item.location}
        time={item.time}
        title={item.title}
        handleClick={() => testFn(item.id)}
      />
    )
  })

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
        {schedule}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
