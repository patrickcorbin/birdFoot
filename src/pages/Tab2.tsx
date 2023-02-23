import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import ScheduleGroup from '../components/ScheduleGroup';
import { usePerformances } from '../hooks/useFBQueries';
import ErrorDisplay from '../components/ErrorDisplay';

interface ContainerProps {
  myFavorites: Array<any>;
  addFavorite: any;
  removeFavorite: any;
}

const Tab2: React.FC<ContainerProps> = ({ myFavorites, addFavorite, removeFavorite }) => {

  const { data } = usePerformances()

  const testDates = data?.map(item => item.dateFull)
  const uniqueTestDates = [...Array.from(new Set(testDates))]

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

  return (
    <IonPage className="demo-body">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Schedule</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding demo-container" fullscreen>
        {
          data ?
          <>
            <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Schedule</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonList>
            {scheduleGroup}
          </IonList>
          </> :
          <ErrorDisplay
              message={"Schedule not loading right now..."}
          />
        }
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
