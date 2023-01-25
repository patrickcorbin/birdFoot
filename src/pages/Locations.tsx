import { IonBackButton, IonButtons, IonContent, IonHeader, IonList, IonLoading, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Locations.css';
// import { locations } from '../data/locations.js';
import LocationItemLink from '../components/LocationItemLink';
import { useLocations } from '../hooks/useFBQueries';

const Locations: React.FC = () => {

  // // const key = (process.env.REACT_APP_MAP_KEY as string)
  // const key = (process.env.REACT_APP_TEST_KEY as string)

  // let newMap: GoogleMap
  // const mapRef = useRef<HTMLElement>()

  // // const [mapConfig, setMapConfig] = useState({
  // //   center: {
  // //     lat: locations[0].lat,
  // //     lng: locations[0].lng
  // //   },
  // //   zoom: 12
  // // })
  
  // const createMap = async () => {

  //   if (!mapRef.current) return

  //   newMap = await GoogleMap.create({
  //     id: "google-map",
  //     element: mapRef.current,
  //     apiKey: key,
  //     config: {
  //       center: {
  //         lat: locations[0].lat,
  //         lng: locations[0].lng
  //       },
  //       zoom: 12
  //     }
  //   })

  //   addMarkers()
  // }

  // const addMapMarker = async (marker: any) => {
    
  //   await newMap.addMarker({
  //     coordinate: {
  //       lat: marker.lat,
  //       lng: marker.lng
  //     },
  //     title: marker.title
  //   })
  // }

  // const addMarkers = () => locations.forEach(marker => addMapMarker(marker))

  // const { mapRef, createMap } = useMaps(locations)

  // useIonViewWillEnter(() => createMap());

  const { isLoading, data: locs } = useLocations()

  const locationList = locs?.map(item => {
    return (
      <LocationItemLink 
        key={item.id}
        marker={item}
        line={true}
      />
    )
  })

    return (
      <IonPage className="demo-body">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton text="Back" defaultHref='/info' />
            </IonButtons>
            <IonTitle>Locations</IonTitle>
            {/* <IonSegment value={mapView ? 'map' : 'list'}>
              <IonSegmentButton value="map" onClick={() => setMapView(true)}>
                <IonIcon icon={map} />
              </IonSegmentButton>
              <IonSegmentButton value="list" onClick={() => setMapView(false)}>
                <IonIcon icon={list} />
              </IonSegmentButton>
            </IonSegment> */}
          </IonToolbar>
        </IonHeader>
        <IonContent className="demo-container" fullscreen>
          <IonLoading 
            isOpen={isLoading}
          />
          <IonList className="ion-padding">
            {locationList}
          </IonList>
          {/* {
            mapView ? 
            <capacitor-google-map 
              ref={mapRef} 
              id="map"
              className="test-map"
            ></capacitor-google-map> :
            <IonList className="ion-padding">
              {locationList}
            </IonList>
          } */}
        </IonContent>
      </IonPage>
    );
  };
  
  export default Locations;