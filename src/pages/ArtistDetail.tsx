import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import './ArtistDetail.css';
import './demo.css';
import { artistData } from '../data/schedule.js'

import { useParams } from 'react-router';
import ArtistItemDetail from '../components/ArtistItemDetail';

const ArtistDetail: React.FC = () => {

    let { id } = useParams<{ id: string}>();

    const artistItem = artistData.filter(item => item.id === id)

    const { artist, artistDescription, artistWebsite, imageFile } = artistItem[0]

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
            <ArtistItemDetail
                id={id}
                artist={artist}
                imageFile={imageFile}
                artistDescription={artistDescription}
                artistWebsite={artistWebsite}
            />
        </IonContent>
    </IonPage>
  );
};

export default ArtistDetail;