import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './About.css';

const About: React.FC = () => {
    return (
      <IonPage className="demo-body">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton text="Back" defaultHref='/info' />
            </IonButtons>
            <IonTitle>About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="demo-container" fullscreen>
          {/* <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">About</IonTitle>
            </IonToolbar>
          </IonHeader> */}
          <img className="about__img" src='./assets/images/BF2023/flood.jpg' alt='MS River Birdfoot' />
          <div className="about-container">
            <h2>The Birdfoot Festival -
                New Orleans’ International Chamber Music Festival
            </h2>
            <p>
                <em>Birdfoot’s mission is to empower artists, inspire audiences, and upend expectations.</em>
            </p>
            <p>
                Recognized for its fresh approach and “youthful, rule-bending style” (The Times-Picayune), the Birdfoot Festival is recognized in New Orleans and beyond for its creative programming and its collaborative and musician-responsive ethic.
            </p>
            <p>
                Now celebrating its twelfth season, Birdfoot has already presented more than one hundred and sixty concerts and events, and drawn artists and audiences from across the nation and five continents. 
            </p>
            <p>
                <strong>Empowering artists —</strong> Birdfoot provides time and space for artists to do their best work. The festival is a creative haven for musicians to collaborate, and exchange ideas, cultivating artistry that sparks the imagination and touches the soul.
            </p>
            <p>
                <strong>Inspiring audiences —</strong> Named for the branching footprint of the Mississippi River Delta, Birdfoot draws inspiration from the live music culture of New Orleans, presenting chamber music in intimate venues. Listeners are invited into the creative process through Birdfoot’s free community events, and artists and audiences mingle and chat after concerts.
            </p>
            <p>
                <strong>Upending expectations —</strong> Approaching live performance with daring and immediacy, Birdfoot revels in the joy of making and sharing live music. The festival values collaboration as a source of fresh perspective and aims to inspire discovery through meaningful musical experiences.
            </p>
            <p>
                <strong>Education & Mentoring —</strong> Birdfoot’s award-winning Young Artist Program challenges dedicated young music students to expand their musical abilities, imagination, and leadership skills through intensive chamber music coachings, workshops, and masterclasses led by international-caliber musicians.
            </p>
            <p>
                <strong>Musical Community —</strong> In partnership with New Orleans Public Radio and Classical 104.9 FM, Birdfoot hosts HearHearNOLA.org, a free online calendar of musical events  where New Orleans’ classical music presenters, musicians, and audiences can share and discover upcoming classical, contemporary, and art music performance in the area.
            </p>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default About;