import { useIonViewWillEnter, useIonModal } from '@ionic/react';
import './MapDetail.css';
// import { useMaps } from '../hooks/useMaps';
// import { locations } from '../data/locations.js';
import { useRef, useState } from 'react';
import { GoogleMap } from '@capacitor/google-maps';
import LocationItem from '../components/LocationItem';

interface ContainerProps {
    locations: any;
}

const MapDetail: React.FC<ContainerProps> = ({locations}) => {

  // const { mapRef, createMap } = useMaps(locations)

    // const key = (process.env.REACT_APP_MAP_KEY as string)
  const key = (process.env.REACT_APP_TEST_KEY as string)

  let newMap: GoogleMap
  const mapRef = useRef<HTMLElement>()

  // const [mapConfig, setMapConfig] = useState({
  //   center: {
  //     lat: locations[0].lat,
  //     lng: locations[0].lng
  //   },
  //   zoom: 12
  // })

      const [selectedMarker, setSelectedMarker] = useState(null)

    const [present, dismiss] = useIonModal(LocationItem, {
        
        marker: selectedMarker,
        line: false
        // key: selectedMarker.id,
        // id: selectedMarker.id,
        // title: selectedMarker.title,
        // imageFile: selectedMarker.imageFile,
        // address: selectedMarker.address,
        // line: false
    })

    const modalOptions = {

        initialBreakpoint: 0.3,
        breakpoints: [0, 0.3],
        backdropBreakpoint: 0,
        onDidDismiss: () => dismiss()
    }

    const markerClick = (marker: any) => {

        setSelectedMarker(locations.filter((m: any) => (m.lat === marker.latitude && m.lng === marker.longitude)))
        present(modalOptions)
        console.log('clicked')
    }
  
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

    newMap.setOnMarkerClickListener((marker) => markerClick(marker))
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

  const addMarkers = () => locations.forEach((marker: any) => addMapMarker(marker))

  // const [mapView, setMapView] = useState(true)

  // const { mapRef, createMap } = useMaps(locations)

  // useIonViewWillEnter(() => createMap());

  useIonViewWillEnter(() => createMap());

    return (
        <capacitor-google-map 
            ref={mapRef} 
            id="map"
            className="test-map"
        ></capacitor-google-map> 
    );
  };
  
  export default MapDetail;