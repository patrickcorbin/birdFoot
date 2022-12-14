import { IonButton, IonContent, IonPage } from '@ionic/react';
import './Tab1.css';
import './demo.css';

const Tab1: React.FC = () => {
  return (
    <IonPage className="demo-body">
        <IonContent className="ion-padding demo-container" fullscreen>
          <div className="home-container">
            <img className="logo" src="assets/BF_logo.png" alt="Birdfoot Logo" />
            <div className="home__body">
              <p>
                Birdfoot Festival is back with a season of music-making that explores our entwined relationship with the natural world. At the heart of Birdfoot 2023 is a musical pilgrimage that reaches beyond the concert hall to celebrate the mythic dimensions of nature, bear witness to environmental injustices, and meditate on our place in the world.
              </p>
              <p>
                Join us on this journey of musical contemplation.
              </p>
            </div>
            <IonButton color="primary" size='large' expand='block' href='#'>
              Purchase Tickets
            </IonButton>
            <img className="bird" src="assets/BF_Bird.png" alt="Birdfoot Bird" />
          </div>
        </IonContent>
    </IonPage>
  );
};

export default Tab1;
