import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonToolbar, useIonRouter } from '@ionic/react';
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

    // const router = useIonRouter();

    const schedItem = scheduleData.filter(sched => sched.id === id)

    const { artist, date, description, imageFile, perfLocation, program, time, title } = schedItem[0]

    // console.log('page rendered')

    let programDisplay = program.map(prog => <p>{prog.artist && (<b>{prog.artist}:</b>)} {prog.piece}</p> )

    let descriptionDisplay = description.map(desc => <p>{desc}</p>)

  return (
    <IonPage className="demo-body">
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton text="Back" defaultHref='/tab2' />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding demo-container" fullscreen>
            <div className="itemDetail">
                <img className="itemDetail__img" src={`./assets/images/${imageFile}`} alt={artist} />
                <div className="itemDetail__body">
                    <h2 className="itemDetail__body-title">
                        {title}
                    </h2>
                    <h3 className="itemDetail__body-artist">
                        {artist}
                    </h3>
                    <div className="itemDetail__body-date">
                        <div>{date}</div>
                        <div>{time}</div>
                    </div>
                    <div className="itemDetail__body-location">
                    <IonIcon className="icon-purple" icon={location} />
                    <span className="location-text">{perfLocation}</span>
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