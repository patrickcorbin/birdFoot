import { useRef, useState } from 'react';
import { GoogleMap } from '@capacitor/google-maps';
// import { useIonModal } from '@ionic/react';
// import LocationItem from '../components/LocationItem';


export function useMaps(locs: any) {

    // const key = (process.env.REACT_APP_MAP_KEY as string)
    // const key = (process.env.REACT_APP_TEST_KEY as string) 
    // const key = (process.env.REACT_APP_MAP_KEY_IOS as string)
    // const key = (process.env.REACT_APP_MAP_KEY_ANDROID as string)
    const key = 'AIzaSyBjdzzC1GBmN9vOHMrHiGjHTwon7MuiBtU'

    const [mapConfig, setMapConfig] = useState({
        center: {
            lat: locs[0].lat,
            lng: locs[0].lng
        },
        zoom: 13
    })

    // const [selectedMarker, setSelectedMarker] = useState(null)

    // const [present, dismiss] = useIonModal(LocationItem, {
        
    //     marker: selectedMarker,
    //     line: false
    //     // key: selectedMarker.id,
    //     // id: selectedMarker.id,
    //     // title: selectedMarker.title,
    //     // imageFile: selectedMarker.imageFile,
    //     // address: selectedMarker.address,
    //     // line: false
    // })

    // const modalOptions = {

    //     initialBreakpoint: 0.3,
    //     breakpoints: [0, 0.3],
    //     backdropBreakpoint: 0,
    //     onDidDismiss: () => dismiss()
    // }

    // const markerClick = (marker: any) => {

    //     setSelectedMarker(locs.filter((m: any) => (m.lat === marker.latitude && m.lng === marker.longitude)))
    //     present(modalOptions)
    //     console.log('clicked')
    // }

    let newMap: GoogleMap
    const mapRef = useRef<HTMLElement>()

    const createMap = async () => {

        if (!mapRef.current) return
    
        newMap = await GoogleMap.create({
          id: "google-map",
          element: mapRef.current,
          apiKey: key,
          config: mapConfig
        })

        // newMap.setOnMarkerClickListener((marker) => markerClick(marker))
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

      const addMarkers = () => locs.forEach((marker: any) => addMapMarker(marker))

    return {
        mapRef,
        setMapConfig,
        createMap,
        addMapMarker
    }
}