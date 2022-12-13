import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ScheduleItem from '../components/ScheduleItem';
import ScheduleItemDetail from '../components/ScheduleItemDetail';
import './Tab2.css';
import { scheduleData } from '../data/schedule.js'

const Tab2: React.FC = () => {

  const [schedDetailId, setSchedDetailId] = useState<string>('')

  const schedDetailEl = scheduleData.filter(sched => sched.id === schedDetailId)

  function showSchedDetail(x: string) {
    setSchedDetailId(x)
  }

  function closeSchedDetail() {
    setSchedDetailId('')
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
        handleClick={() => showSchedDetail(item.id)}
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
        {schedDetailId && <ScheduleItemDetail 
          id={schedDetailEl[0].id}
          artist={schedDetailEl[0].artist}
          date={schedDetailEl[0].date}
          imageFile={schedDetailEl[0].imageFile}
          perfLocation={schedDetailEl[0].location}
          time={schedDetailEl[0].time}
          title={schedDetailEl[0].title}
          program={schedDetailEl[0].program}
          description={schedDetailEl[0].description}
          handleClose={closeSchedDetail}
        />}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
