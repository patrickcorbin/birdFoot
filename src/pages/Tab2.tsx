import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import { useState } from 'react';
import ScheduleItem from '../components/ScheduleItem';
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
      <ScheduleItem 
        key={item.id}
        id={item.id}
        parentPage={'tab2'}
        artist={item.artist}
        date={item.date}
        imageFile={item.imageFile}
        perfLocation={item.perfLocation}
        time={item.time}
        title={item.title}
        isFavorite={myFavorites.includes(item.id)}
        // handleClick={() => showSchedDetail(item.id)}
        handleAdd={() => addFavorite(item.id)}
        handleRemove={() => removeFavorite(item.id)}
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
        <div className="schedule-container">
          {schedule}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
