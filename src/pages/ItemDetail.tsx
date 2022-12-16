import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonToolbar } from '@ionic/react';
import { location } from 'ionicons/icons';
import './ItemDetail.css';
import './demo.css';
import { scheduleData } from '../data/schedule.js'

import { useParams } from 'react-router';

// interface ItemDetailPageProps extends RouteComponentProps<{
//     id: string;
//   }> {}

const ItemDetail: React.FC = () => {

    let { id } = useParams<{ id: string}>();

    let schedItem = scheduleData.filter(sched => sched.id === id)

    let programDisplay = schedItem[0].program.map(prog => <p>{prog.artist && (<b>{prog.artist}:</b>)} {prog.piece}</p> )

    let descriptionDisplay = schedItem[0].description.map(desc => <p>{desc}</p>)

  return (
    <IonPage className="demo-body">
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton text="Back" defaultHref='/Tab2'/>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding demo-container" fullscreen>
            <div className="itemDetail">
                <img className="itemDetail__img" src={`./assets/images/${scheduleData[0].imageFile}`} alt={scheduleData[0].artist} />
                <div className="itemDetail__body">
                    <h2 className="itemDetail__body-title">
                        {scheduleData[0].title}
                    </h2>
                    <h3 className="itemDetail__body-artist">
                        {scheduleData[0].artist}
                    </h3>
                    <div className="itemDetail__body-date">
                        <div>{scheduleData[0].date}</div>
                        <div>{scheduleData[0].time}</div>
                    </div>
                    <div className="itemDetail__body-location">
                    <IonIcon className="icon-purple" icon={location} />
                    <span className="location-text">{scheduleData[0].perfLocation}</span>
                    </div>
                    <h3>Program:</h3>
                    <p>Selections from</p>
                    {programDisplay}
                    {descriptionDisplay}
                </div>
            </div>
        </IonContent>
    </IonPage>
  );
};

export default ItemDetail;