import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import './LocationDetail.css';
import './demo.css';
// import { useMaps } from '../hooks/useMaps';

import { useParams } from 'react-router';
// import LocationItem from '../components/LocationItem';
import { useLocation } from '../hooks/useFBQueries';
import ErrorDisplay from '../components/ErrorDisplay';
import LocationItemDetail from '../components/LocationItemDetail';

const LocationDetail: React.FC = () => {

    let { id } = useParams<{ id: string}>();

    const { data: loc } = useLocation(id)

    // const locObj = [
    //     {
    //         id: loc?.id,
    //         lat: loc?.lat,
    //         lng: loc?.lng,
    //         name: loc?.name,
    //         imageFile: loc?.imageFile,
    //         address: loc?.address,
    //         neighborhood: loc?.neighborhood
    //     }
    // ]

    // const { mapRef, createMap } = useMaps(locObj)

    // useIonViewWillEnter(() => createMap())

  return (
    <IonPage className="demo-body">
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton text="Back" defaultHref='/locations' />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent className="demo-container" fullscreen>
            {
                loc ? 
                <LocationItemDetail 
                    id={id}
                    imageFile={loc?.imageFile}
                    name={loc?.name}
                    address={loc?.address}
                    neighborhood={loc?.neighborhood}
                    description={loc?.description}
                    mapsLink={loc?.mapsLink}
                    website={loc?.website}
                /> :
                // <>
                //     <capacitor-google-map 
                //         ref={mapRef} 
                //         id="map"
                //         className="test-map"
                //     ></capacitor-google-map>
                //     <LocationItem
                //         key={id}
                //         marker={locObj[0]}
                //         line={false}
                //     />  
                // </> : 
                <ErrorDisplay
                    message={"We can't seem to find what you're looking for..."}
                />
            }
        </IonContent>
    </IonPage>
  );
};

export default LocationDetail;