import { IonButton, IonContent, IonPage } from '@ionic/react';
import './Tab1.css';
import './demo.css';
import { useArtists, useLocations, usePerformances } from '../hooks/useFBQueries';

const Tab1: React.FC = () => {

  usePerformances()
  useArtists()
  useLocations()

  return (
    <IonPage className="demo-body">
        <IonContent className="ion-padding demo-container" fullscreen>
          <div className="home-container">
            <img className="logo" src="assets/BF_logo.png" alt="Birdfoot Logo" />
            <div className="home__body">
              {/* <p>
                Birdfoot Festival is back with a season of music-making that explores our entwined relationship with the natural world. At the heart of Birdfoot 2023 is a musical pilgrimage that reaches beyond the concert hall to celebrate the mythic dimensions of nature, bear witness to environmental degradation, and meditate on our place in the world.
              </p> */}
              <p>
                Birdfoot is back with a season of music-making that expolores our entwined relationship with the natural world. At the heart to Birdfoot 2023 is a musical pilgrimage that takes audience members beyond the concert hall to explore our relationship with music and the natural world.
              </p>
              <p>
                Join us on this journey of musical contemplation. Get a full season pass below or visit event pages to make individual reservations.
              </p>
            </div>
            <IonButton color="primary" size='large' expand='block' href='https://secure.lglforms.com/form_engine/s/NkfKv2wQOwOVanRzsMp9qg' target="_blank">
              GET SEASON PASS
            </IonButton>
            <img className="bird" src="assets/BF_Bird.png" alt="Birdfoot Bird" />
          </div>
        </IonContent>
    </IonPage>
  );
};

export default Tab1;
