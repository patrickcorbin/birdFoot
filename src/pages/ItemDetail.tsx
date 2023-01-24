import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import './ItemDetail.css';
import './demo.css';
import { scheduleData } from '../data/schedule.js'

import { useParams } from 'react-router';
import ScheduleItemDetail from '../components/ScheduleItemDetail';

interface ContainerProps {
    myFavorites: Array<any>;
    addFavorite: any;
    removeFavorite: any;
  }

const ItemDetail: React.FC<ContainerProps> = ({ myFavorites, addFavorite, removeFavorite }) => {

    let { id } = useParams<{ id: string}>();

    const schedItem = scheduleData.filter(sched => sched.id === id)

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
            <ScheduleItemDetail
                item={schedItem[0]}
                isFavorite={myFavorites.includes(id)}
                handleAdd={() => addFavorite(id)}
                handleRemove={() => removeFavorite(id)}
            />
        </IonContent>
    </IonPage>
  );
};

export default ItemDetail;