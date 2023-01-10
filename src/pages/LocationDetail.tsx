import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import './LocationDetail.css';
import './demo.css';
import { locations } from '../data/locations.js'
import { useMaps } from '../hooks/useMaps';

import { useParams } from 'react-router';
import LocationItem from '../components/LocationItem';

const LocationDetail: React.FC = () => {

    let { id } = useParams<{ id: string}>();

    const locationItem = locations.filter(item => item.id === id)

    const { mapRef, createMap } = useMaps(locationItem)

    // const { title, address, imageFile } = locationItem[0]

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
            <LocationItem
                key={id}
                marker={locationItem[0]}
                // id={id}
                // title={title}
                // imageFile={imageFile}
                // address={address}
                line={false}
            />
        </IonContent>
    </IonPage>
  );
};

export default LocationDetail;