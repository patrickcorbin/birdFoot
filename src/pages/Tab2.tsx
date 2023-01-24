import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ScheduleIonItem from '../components/ScheduleIonItem';
import './Tab2.css';
// import { scheduleData } from '../data/schedule.js'
import ScheduleGroup from '../components/ScheduleGroup';
import { usePerformances } from '../hooks/useFBQueries';

interface ContainerProps {
  myFavorites: Array<any>;
  addFavorite: any;
  removeFavorite: any;
}

const Tab2: React.FC<ContainerProps> = ({ myFavorites, addFavorite, removeFavorite }) => {

  const { data } = usePerformances()

  const testDates = data?.map(item => item.dateFull)
  const uniqueTestDates = [...Array.from(new Set(testDates))]

  // const scheduleDates = scheduleData.map(item => item.dateFull)
  // const uniqueDates = [...Array.from(new Set(scheduleDates))]

  // const testSort = uniqueTestDates.map(date => new Date(date)).sort()
  // console.log(testSort)

  const scheduleGroup = uniqueTestDates.map(date => {
    return (
      <ScheduleGroup 
        key={date}
        dateFull={date}
        myFavorites={myFavorites}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
      />
    )
  })

  // const schedule = scheduleData.map(item => {
  //   return (
  //     <ScheduleIonItem 
  //       key={item.id}
  //       id={item.id}
  //       parentPage={'schedule'}
  //       artist={item.artist}
  //       date={item.date}
  //       imageFile={item.imageFile}
  //       perfLocation={item.perfLocation}
  //       time={item.time}
  //       title={item.title}
  //       isFavorite={myFavorites.includes(item.id)}
  //       handleAdd={(e: TouchEvent) => {addFavorite(item.id); e.stopPropagation(); e.preventDefault();}}
  //       handleRemove={(e: any) => {removeFavorite(item.id); e.stopPropagation(); e.preventDefault();}}
  //     />
  //   )
  // })

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
        <IonList>
          {scheduleGroup}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
