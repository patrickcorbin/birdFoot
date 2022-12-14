import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ScheduleItem from '../components/ScheduleItem';
import ScheduleItemDetail from '../components/ScheduleItemDetail';
import './Tab3.css';
import { scheduleData } from '../data/schedule.js'

interface ContainerProps {
  myFavorites: Array<any>;
}

const Tab3: React.FC<ContainerProps> = ({ myFavorites }) => {

  const [schedDetailId, setSchedDetailId] = useState<string>('')
  // const [myFavorites, setMyFavorites] = useState<Array<string>>([
  //   "B4MVBK2MMZPFEXRW4K7VU4BCSQA0PY",
  //   "PVNGBKTKZA85W8MKDLLR8TD38V23CW"
  // ])

  const schedDetailEl = scheduleData.filter(sched => sched.id === schedDetailId)

  let myFavoriteArr = scheduleData.filter(sched => myFavorites.includes(sched.id))

  function showSchedDetail(x: string) {
    setSchedDetailId(x)
  }

  function closeSchedDetail() {
    setSchedDetailId('')
  }

  function testFn(x: string) {
    alert(`item ${x} added`)
  }

  const schedule = myFavoriteArr.map(item => {
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
        handleAdd={() => testFn(item.id)}
      />
    )
  })

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

export default Tab3;
