import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import { useState } from 'react';
import ScheduleIonItem from '../components/ScheduleIonItem';
// import ScheduleItemDetail from '../components/ScheduleItemDetail';
import './Tab2.css';
import { scheduleData } from '../data/schedule.js'

interface ContainerProps {
  myFavorites: Array<any>;
  addFavorite: any;
  removeFavorite: any;
}

const Tab2: React.FC<ContainerProps> = ({ myFavorites, addFavorite, removeFavorite }) => {

  // const [schedDetailId, setSchedDetailId] = useState<string>('')

  // const schedDetailEl = scheduleData.filter(sched => sched.id === schedDetailId)

  // function showSchedDetail(x: string) {
  //   setSchedDetailId(x)
  // }

  // function closeSchedDetail() {
  //   setSchedDetailId('')
  // }

  // function testFn(x: string) {
  //   alert(`item ${x} added`)
  // }

  const schedule = scheduleData.map(item => {
    return (
      <ScheduleIonItem 
        key={item.id}
        id={item.id}
        parentPage={'schedule'}
        artist={item.artist}
        date={item.date}
        imageFile={item.imageFile}
        perfLocation={item.perfLocation}
        time={item.time}
        title={item.title}
        isFavorite={myFavorites.includes(item.id)}
        handleAdd={(e: any) => {addFavorite(item.id); e.preventDefault();}}
        handleRemove={(e: any) => {removeFavorite(item.id); e.preventDefault();}}
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
      <IonContent className="ion-padding demo-container" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Schedule</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="schedule-container">
          
        </div>
        <IonList>
          {schedule}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
