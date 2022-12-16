import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import { useState } from 'react';
import ScheduleItem from '../components/ScheduleItem';
// import ScheduleItemDetail from '../components/ScheduleItemDetail';
import './Tab3.css';
import { scheduleData } from '../data/schedule.js'
import NoFavoriteContainer from '../components/NoFavoriteContainer';

interface ContainerProps {
  myFavorites: Array<any>;
  addFavorite: any;
  removeFavorite: any;
}

const Tab3: React.FC<ContainerProps> = ({ myFavorites, addFavorite, removeFavorite }) => {

  // const [schedDetailId, setSchedDetailId] = useState<string>('')
  // const [myFavorites, setMyFavorites] = useState<Array<string>>([
  //   "B4MVBK2MMZPFEXRW4K7VU4BCSQA0PY",
  //   "PVNGBKTKZA85W8MKDLLR8TD38V23CW"
  // ])

  // const schedDetailEl = scheduleData.filter(sched => sched.id === schedDetailId)

  let myFavoriteArr = scheduleData.filter(sched => myFavorites.includes(sched.id))

  // function showSchedDetail(x: string) {
  //   setSchedDetailId(x)
  // }

  // function closeSchedDetail() {
  //   setSchedDetailId('')
  // }

  // const scheduleDataArr = scheduleData.map(item => {
  //   return {
  //     ...item,
  //     isFavorite: myFavorites.includes(item.id)
  //   }
  // })

  const schedule = myFavoriteArr.map(item => {
    return (
      <ScheduleItem 
        key={item.id}
        id={item.id}
        parentPage={'tab3'}
        artist={item.artist}
        date={item.date}
        imageFile={item.imageFile}
        perfLocation={item.perfLocation}
        time={item.time}
        title={item.title}
        isFavorite={true}
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
          {
            myFavoriteArr.length > 0 ?
            schedule :
            <NoFavoriteContainer />
          }
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
