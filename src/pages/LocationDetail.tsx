import { IonBackButton, IonButtons, IonContent, IonHeader, IonLoading, IonPage, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import './LocationDetail.css';
import './demo.css';
// import { locations } from '../data/locations.js';
import { useMaps } from '../hooks/useMaps';

import { useParams } from 'react-router';
import LocationItem from '../components/LocationItem';
import { useLocation } from '../hooks/useFBQueries';

const LocationDetail: React.FC = () => {

    let { id } = useParams<{ id: string}>();

    const { isLoading, data: loc } = useLocation(id)

    const locObj = [
        {
            id: loc?.id,
            lat: loc?.lat,
            lng: loc?.lng,
            name: loc?.name,
            imageFile: loc?.imageFile,
            address: loc?.address,
            neighborhood: loc?.neighborhood
        }
    ]

    // const locationItem = locations.filter(item => item.id === id)

    // const { mapRef, createMap } = useMaps(locationItem)
    const { mapRef, createMap } = useMaps(locObj)

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
            <IonLoading 
                isOpen={isLoading}
            />
            <capacitor-google-map 
                ref={mapRef} 
                id="map"
                className="test-map"
            ></capacitor-google-map>
            <LocationItem
                key={id}
                marker={locObj[0]}
                line={false}
            />
        </IonContent>
    </IonPage>
  );
};

export default LocationDetail;