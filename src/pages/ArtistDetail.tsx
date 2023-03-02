import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import './ArtistDetail.css';
import './demo.css';

import { useParams } from 'react-router';
import ArtistItemDetail from '../components/ArtistItemDetail';
import { useArtist } from '../hooks/useFBQueries';
import ErrorDisplay from '../components/ErrorDisplay';

const ArtistDetail: React.FC = () => {

    let { id } = useParams<{ id: string}>();

    const { data } = useArtist(id)

  return (
    <IonPage className="demo-body">
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton text="Back" defaultHref='/artists' />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent className="demo-container" fullscreen>
            {
            data ? 
            <ArtistItemDetail
                id={id}
                artist={data?.name}
                imageFile={data?.imageFile}
                specialty={data?.specialty}
                artistDescription={data?.description}
                artistWebsite={data?.website}
            /> : 
            <ErrorDisplay
                message={"We can't seem to find what you're looking for..."}
            />
            }
        </IonContent>
    </IonPage>
  );
};

export default ArtistDetail;