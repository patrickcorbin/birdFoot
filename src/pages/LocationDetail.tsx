import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import './LocationDetail.css';
import './demo.css';
import { useMaps } from '../hooks/useMaps';

import { useParams } from 'react-router';
import LocationItem from '../components/LocationItem';
import { useLocation } from '../hooks/useFBQueries';
import ErrorDisplay from '../components/ErrorDisplay';

const LocationDetail: React.FC = () => {

    let { id } = useParams<{ id: string}>();

    const { data: loc } = useLocation(id)

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

    const { mapRef, createMap } = useMaps(locObj)

    useIonViewWillEnter(() => createMap())

  return (
    <IonPage className="map-page">
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton text="Back" defaultHref='/artists' />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent className="map-detail" fullscreen>
            {
                loc ? 
                <>
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
                </> : 
                <ErrorDisplay
                    message={"We can't seem to find what you're looking for..."}
                />
            }
        </IonContent>
    </IonPage>
  );
};

export default LocationDetail;