import { IonBackButton, IonButtons, IonContent, IonHeader, IonLoading, IonPage, IonToolbar } from '@ionic/react';
import './ItemDetail.css';
import './demo.css';
// import { scheduleData } from '../data/schedule.js';

import { useParams } from 'react-router';
import ScheduleItemDetail from '../components/ScheduleItemDetail';
import { usePerformance } from '../hooks/useFBQueries';

interface ContainerProps {
    myFavorites: Array<any>;
    addFavorite: any;
    removeFavorite: any;
  }

const ItemDetail: React.FC<ContainerProps> = ({ myFavorites, addFavorite, removeFavorite }) => {

    let { id } = useParams<{ id: string}>();

    const { isLoading, data } = usePerformance(id)

    // const schedItem = scheduleData.filter(sched => sched.id === id)

  return (
    <IonPage className="demo-body">
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton text="Back" defaultHref='/schedule' />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent className="demo-container" fullscreen>
            <IonLoading 
                isOpen={isLoading}
            />
            <ScheduleItemDetail
                artist={data?.artist}
                artistID={data?.artistId}
                date={data?.date}
                imageFile={data?.imageFile}
                perfLocation={data?.perfLocation}
                locationID={data?.locationId}
                time={data?.time}
                title={data?.title}
                program={data?.program}
                description={data?.description}
                isFavorite={myFavorites.includes(id)}
                handleAdd={() => addFavorite(id)}
                handleRemove={() => removeFavorite(id)}
            />
        </IonContent>
    </IonPage>
  );
};

export default ItemDetail;