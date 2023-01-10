import { useIonViewWillEnter } from '@ionic/react';
import './MapDetail.css';
import { useMaps } from '../hooks/useMaps';
import { locations } from '../data/locations.js';

interface ContainerProps {
    locations: object[];
}

const MapDetail: React.FC<ContainerProps> = ({locations}) => {

  const { mapRef, createMap } = useMaps(locations)

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