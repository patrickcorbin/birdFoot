import { IonBackButton, IonButtons, IonContent, IonHeader, IonLoading, IonPage, IonToolbar } from '@ionic/react';
import './ArtistDetail.css';
import './demo.css';
// import { artistData } from '../data/schedule.js'

import { useParams } from 'react-router';
import ArtistItemDetail from '../components/ArtistItemDetail';
import { useArtist } from '../hooks/useFBQueries';

const ArtistDetail: React.FC = () => {

    let { id } = useParams<{ id: string}>();

    const { isLoading, data } = useArtist(id)

    // const artistItem = artistData.filter(item => item.id === id)

    // const { artist, artistDescription, artistWebsite, imageFile } = artistItem[0]

    // const { name, description, imageFile, website } = data

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
            <IonLoading 
                isOpen={isLoading}
            />
            <ArtistItemDetail
                id={id}
                artist={data?.name}
                imageFile={data?.imageFile}
                artistDescription={data?.description}
                artistWebsite={data?.website}
            />
        </IonContent>
    </IonPage>
  );
};

export default ArtistDetail;