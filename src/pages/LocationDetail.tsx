import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonPage, IonThumbnail, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import './LocationDetail.css';
import './demo.css';
import { locations } from '../data/locations.js'
import { useMaps } from '../hooks/useMaps';

import { useParams } from 'react-router';

const LocationDetail: React.FC = () => {

    let { id } = useParams<{ id: string}>();

    const locationItem = locations.filter(item => item.id === id)

    const { mapRef, createMap } = useMaps(locationItem)

    const { title, address, imageFile } = locationItem[0]

    useIonViewWillEnter(() => createMap())

  return (
    <IonPage className="demo-body">
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton text="Back" defaultHref='/artists' />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent className="demo-container map-detail" fullscreen>
            <capacitor-google-map 
                ref={mapRef} 
                id="map"
                className="test-map"
            ></capacitor-google-map>
            <IonItem
                className="sched-item" 
                lines='none' 
                detail={false}
            >
                <IonThumbnail slot="start">
                    <img src={`./assets/images/${imageFile}`} alt={title} />
                </IonThumbnail>
                <div className="sched-item__body" >
                    <h2 className="sched-item__body-title">
                        {title}
                    </h2>
                    <p className="sched-item__body-artist">
                        {address}
                    </p>
                </div>
            </IonItem>
        </IonContent>
    </IonPage>
  );
};

export default LocationDetail;