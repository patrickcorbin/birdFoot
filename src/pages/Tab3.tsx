import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar} from '@ionic/react';
// import { useState } from 'react';
import ScheduleIonItem from '../components/ScheduleIonItem';
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
  
  // const scheduleTest = scheduleData.map(item => {
  //   return (
  //     <IonItem 
  //       className="sched-item" 
  //       lines='full' 
  //       detail={false} 
  //       href={`/favorites/item/${item.id}`}
  //     >
  //         <IonThumbnail slot="start">
  //           <img src={`./assets/images/${item.imageFile}`} alt={item.artist} />
  //         </IonThumbnail>
  //         <IonIcon 
  //           className="icon-purple"
  //           slot="end"
  //           icon={myFavorites.includes(item.id) ? heart : heartOutline}
  //           onClick={myFavorites.includes(item.id) ? (e: any) => {removeFavorite(item.id); e.preventDefault();} : (e: any) => {addFavorite(item.id); e.preventDefault();}}
  //         ></IonIcon>
  //         <div className="sched-item__body" >
  //           <h2 className="sched-item__body-title">
  //               {item.title}
  //           </h2>
  //           <p className="sched-item__body-artist">
  //               {item.artist}
  //           </p>
  //           <p className="sched-item__body-date">
  //               {item.date}, {item.time}
  //           </p>
  //           <div className="sched-item__body-location">
  //             <IonIcon className="icon-purple" icon={location} />
  //             <span className="location-text">{item.perfLocation}</span>
  //           </div>
  //         </div>
  //     </IonItem>
  //   )
  // })

  return (
    <IonPage className="demo-body">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className=" ion-padding demo-container" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Favorites</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="schedule-container">
        </div>
        <IonList>
        {
            myFavoriteArr.length > 0 ?
            schedule :
            <NoFavoriteContainer />
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
