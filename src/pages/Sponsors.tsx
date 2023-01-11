import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Sponsors.css';
import './demo.css';

const Sponsors: React.FC = () => {
  return (
    <IonPage className="demo-body">
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton text="Back" defaultHref='/info' />
            </IonButtons>
          <IonTitle>Sponsors</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding demo-container" fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sponsors</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <div className="sponsors-container">
            <a target="_blank" rel="noopener noreferrer" href="https://www.gnof.org/program/the-selley-foundation/" className="full-row">
                <img className="sponsors__img" src={`./assets/images/sponsors/Selley_GNOF.png`} alt="Selley Foundation" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.brennansneworleans.com/">
                <img className="sponsors__img" src={`./assets/images/sponsors/Brennans.png`} alt="Brennans" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.nojazzfest.com/">
                <img className="sponsors__img" src={`./assets/images/sponsors/NOJHF.png`} alt="Jazz Fest" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.joneswalker.com/">
                <img className="sponsors__img" src={`./assets/images/sponsors/JonesWalker.png`} alt="Jones Walker" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.crt.state.la.us/cultural-development/">
                <img className="sponsors__img" src={`./assets/images/sponsors/LA-Div-Arts.png`} alt="LA Division of the Arts" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://nola.gov/">
                <img className="sponsors__img" src={`./assets/images/sponsors/CityOfNO.png`} alt="City of New Orleans" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.arts.gov/">
                <img className="sponsors__img" src={`./assets/images/sponsors/NEA.png`} alt="National Endowment of the Arts" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.hearhearnola.org/">
                <img className="sponsors__img" src={`./assets/images/sponsors/HearHearNOLA.png`} alt="Hear Hear NOLA" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.wwno.org/classical-1049">
                <img className="sponsors__img" src={`./assets/images/sponsors/Classical1049.png`} alt="Classical 104.9 FM" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.wwno.org/">
                <img className="sponsors__img" src={`./assets/images/sponsors/WWNO.png`} alt="WWNO 89.9 FM" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.cafecarmo.com/">
                <img className="sponsors__img" src={`./assets/images/sponsors/carmo.png`} alt="Cafe Carmo" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://steinsdeli.com/">
                <img className="sponsors__img" src={`./assets/images/sponsors/Steins.png`} alt="Steins Market &Deli" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://urbanearthstudios.com/">
                <img className="sponsors__img" src={`./assets/images/sponsors/UrbanEarth.png`} alt="Urban Earth Design Studios" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.themilkbarneworleans.com/">
                <img className="sponsors__img" src={`./assets/images/sponsors/TheMilkBar.png`} alt="The Milk Bar" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://stjamescheese.com/pages/full-menu-uptown">
                <img className="sponsors__img" src={`./assets/images/sponsors/StJamesCheese.png`} alt="St. James Cheese Companytent" />
            </a>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Sponsors;