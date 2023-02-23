import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar} from '@ionic/react';
// import { useState } from 'react';
import ScheduleIonItem from '../components/ScheduleIonItem';
import './Tab3.css';
// import { scheduleData } from '../data/schedule.js'
import NoFavoriteContainer from '../components/NoFavoriteContainer';
import { usePerformances } from '../hooks/useFBQueries';
import ErrorDisplay from '../components/ErrorDisplay';

interface ContainerProps {
  myFavorites: Array<any>;
  addFavorite: any;
  removeFavorite: any;
}

const Tab3: React.FC<ContainerProps> = ({ myFavorites, addFavorite, removeFavorite }) => {

  const { data } = usePerformances()

  let myFavoriteArr = data?.filter(sched => myFavorites.includes(sched.id))

  const schedule = myFavoriteArr?.map(item => {
    return (
      <ScheduleIonItem 
        key={item.id}
        item={item}
        parentPage={'favorites'}
        isFavorite={true}
        handleAdd={(e: any) => {addFavorite(item.id); e.stopPropagation(); e.preventDefault();}}
        handleRemove={(e: any) => {removeFavorite(item.id); e.stopPropagation(); e.preventDefault();}}
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
      <IonContent className=" ion-padding demo-container" fullscreen>
        {
          data ? 
          <>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Favorites</IonTitle>
              </IonToolbar>
            </IonHeader>
            <div className="schedule-container">
            </div>
            <IonList>
              {
                myFavoriteArr && myFavoriteArr.length > 0 ?
                schedule :
                <NoFavoriteContainer />
              }
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

export default Tab3;
