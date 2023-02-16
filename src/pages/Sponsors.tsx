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
            {/* <h2 className="full-row">Our Sponsors</h2> */}
            <a target="_blank" rel="noopener noreferrer" href="https://www.gnof.org/program/the-selley-foundation/" className="full-row">
                <img className="sponsors__img" src={`./assets/images/sponsors/Selley_GNOF.png`} alt="Selley Foundation" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.joneswalker.com/">
                <img className="sponsors__img" src={`./assets/images/sponsors/JonesWalker.png`} alt="Jones Walker" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.arts.gov/">
                <img className="sponsors__img" src={`./assets/images/sponsors/NEA.png`} alt="National Endowment of the Arts" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.crt.state.la.us/cultural-development/">
                <img className="sponsors__img" src={`./assets/images/sponsors/LA-Div-Arts.png`} alt="LA Division of the Arts" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.nojazzfest.com/">
                <img className="sponsors__img" src={`./assets/images/sponsors/NOJHF.png`} alt="Jazz Fest" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.wwno.org/">
                <img className="sponsors__img" src={`./assets/images/sponsors/NOPR_TwoLogos.jpg`} alt="WWNO 89.9 FM" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://cacno.org/">
                <img className="sponsors__img" src={`./assets/images/sponsors/logo-cac.jpg`} alt="Contemporary Arts Center" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://fertel.com/about-the-ruth-u-fertel-foundation/">
                <img className="sponsors__img" src={`./assets/images/sponsors/Ruth-U-Fertel-Found.jpeg`} alt="Ruth U Fertel Foundation" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.hearhearnola.org/">
                <img className="sponsors__img" src={`./assets/images/sponsors/HearHearNOLA.png`} alt="Hear Hear NOLA" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.theriversretreat.com/">
                <img className="sponsors__img" src={`./assets/images/sponsors/Rivers-Retreat.png`} alt="Rivers Retreat" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.theokrainn.com/">
                <img className="sponsors__img" src={`./assets/images/sponsors/Okra-Inn.jpg`} alt="The Okra Inn" />
            </a>
            <h2 className="full-row">Community Partners</h2>
            <a target="_blank" rel="noopener noreferrer" href="https://www.thedescendantsproject.com/">
                <img className="sponsors__img" src={`./assets/images/sponsors/Desc-Project.jpeg`} alt="The Descendants Project" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://noma.org/">
                <img className="sponsors__img" src={`./assets/images/sponsors/NOMA.jpg`} alt="NOMA" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://marignyoperahouse.org/">
                <img className="sponsors__img" src={`./assets/images/sponsors/Marigny-Opera-House-logo.png`} alt="Marigny Opera House" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://materialinstitute.org/">
                <img className="sponsors__img" src={`./assets/images/sponsors/material_institute-logotype.png`} alt="Material Institute" />
            </a>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Sponsors;