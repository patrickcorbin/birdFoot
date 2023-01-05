import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { useRef } from 'react';
import './Locations.css';
import { GoogleMap } from '@capacitor/google-maps';
import { locations } from '../data/locations.js';

const Locations: React.FC = () => {

  const key = "AIzaSyC_Apog-yi-mdlHVeD8PpAQETXskNFx23c";
  let newMap: GoogleMap
  const mapRef = useRef<HTMLElement>()

  // const [mapConfig, setMapConfig] = useState({
  //   center: {
  //     lat: locations[0].lat,
  //     lng: locations[0].lng
  //   },
  //   zoom: 12
  // })

  // const testKey = process.env.MY_MAPS_API_KEY
  
  const createMap = async () => {

    if (!mapRef.current) return

    newMap = await GoogleMap.create({
      id: "google-map",
      element: mapRef.current,
      apiKey: key,
      config: {
        center: {
          lat: locations[0].lat,
          lng: locations[0].lng
        },
        zoom: 12
      }
    })

    addMarkers()
  }

  const addMapMarker = async (marker: any) => {
    
    await newMap.addMarker({
      coordinate: {
        lat: marker.lat,
        lng: marker.lng
      },
      title: marker.title
    })
  }

  const addMarkers = () => locations.forEach(marker => addMapMarker(marker))

  useIonViewWillEnter(() => createMap());

    return (
      <IonPage className="demo-body">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton text="Back" defaultHref='/info' />
            </IonButtons>
            <IonTitle>Locations</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="demo-container" fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Locations</IonTitle>
            </IonToolbar>
          </IonHeader>
          
          {/* <div className="location-container"> */}
            <capacitor-google-map 
              ref={mapRef} 
              id="map"
              className="test-map"
            ></capacitor-google-map>
          {/* </div> */}
        </IonContent>
      </IonPage>
    );
  };
  
  export default Locations;