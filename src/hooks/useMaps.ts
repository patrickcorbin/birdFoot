import { useRef, useState } from 'react';
import { GoogleMap } from '@capacitor/google-maps';


export function useMaps(locs: any) {

    // const key = (process.env.REACT_APP_MAP_KEY as string)
    const key = (process.env.REACT_APP_TEST_KEY as string)    

    const [mapConfig, setMapConfig] = useState({
        center: {
            lat: locs[0].lat,
            lng: locs[0].lng
        },
        zoom: 12
    })

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