import { IonBackButton, IonButtons, IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Locations.css';
import LocationItemLink from '../components/LocationItemLink';
import { useLocations } from '../hooks/useFBQueries';
import ErrorDisplay from '../components/ErrorDisplay';

const Locations: React.FC = () => {

  const { data: locs } = useLocations()

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
          </IonToolbar>
        </IonHeader>
        <IonContent className="demo-container" fullscreen>
          {
            locs ?
            <IonList className="ion-padding">
              {locationList}
            </IonList> :
            <ErrorDisplay
                message={"Locations not loading right now..."}
            />
          }
        </IonContent>
      </IonPage>
    );
  };
  
  export default Locations;