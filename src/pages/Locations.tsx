import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonSegment, IonSegmentButton, IonThumbnail, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { useState } from 'react';
import './Locations.css';
import { locations } from '../data/locations.js';
import { useMaps } from '../hooks/useMaps';

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

  const [mapView, setMapView] = useState(true)

  const { mapRef, createMap } = useMaps(locations)

  useIonViewWillEnter(() => createMap());

  const locationList = locations.map(item => {
    return (
      <IonItem
              className="sched-item" 
              lines='none' 
              detail={false}
          >
              <IonThumbnail slot="start">
                  <img src={`./assets/images/${item.imageFile}`} alt={item.title} />
              </IonThumbnail>
              <div className="sched-item__body" >
                  <h2 className="sched-item__body-title">
                      {item.title}
                  </h2>
                  <p className="sched-item__body-artist">
                      {item.address}
                  </p>
              </div>
      </IonItem>
    )
  })

    return (
      <IonPage className="demo-body">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton text="Back" defaultHref='/info' />
            </IonButtons>
            {/* <IonTitle>Locations</IonTitle> */}
            <IonSegment value="map">
              <IonSegmentButton value="map" onClick={() => setMapView(true)}>
              <IonLabel>map</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="list" onClick={() => setMapView(false)}>
                <IonLabel>list</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonToolbar>
        </IonHeader>
        <IonContent className="demo-container" fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              {/* <IonTitle size="large">Locations</IonTitle> */}
            </IonToolbar>
          </IonHeader>
          {
            mapView ? 
            <capacitor-google-map 
              ref={mapRef} 
              id="map"
              className="test-map"
            ></capacitor-google-map> :
            <IonList>
              {locationList}
            </IonList>
          }
        </IonContent>
      </IonPage>
    );
  };
  
  export default Locations;