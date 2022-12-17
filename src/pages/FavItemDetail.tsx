import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import './FavItemDetail.css';
import './demo.css';
import { scheduleData } from '../data/schedule.js'

import { useParams } from 'react-router';
import ScheduleItemDetail from '../components/ScheduleItemDetail';

interface ContainerProps {
    myFavorites: Array<any>;
    addFavorite: any;
    removeFavorite: any;
  }

const FavItemDetail: React.FC<ContainerProps> = ({ myFavorites, addFavorite, removeFavorite }) => {

    let { id } = useParams<{ id: string}>();

    const schedItem = scheduleData.filter(sched => sched.id === id)

    const { artist, date, description, imageFile, perfLocation, program, time, title } = schedItem[0]

  return (
    <IonPage className="demo-body">
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton text="Back" defaultHref='/favorites' />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding demo-container" fullscreen>
            <ScheduleItemDetail
                id={id}
                artist={artist}
                date={date}
                imageFile={imageFile}
                perfLocation={perfLocation}
                time={time}
                title={title}
                program={program}
                description={description}
                isFavorite={myFavorites.includes(id)}
                handleAdd={() => addFavorite(id)}
                handleRemove={() => removeFavorite(id)}
            />
        </IonContent>
    </IonPage>
  );
};

export default FavItemDetail;