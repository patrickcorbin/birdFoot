import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import { Storage } from '@ionic/storage';
import { useState } from 'react';
import { calendar, heart, home, informationCircle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Info from './pages/Info';
import Artists from './pages/Artists';
import Locations from './pages/Locations';
import About from './pages/About';
import Sponsors from './pages/Sponsors';
import ItemDetail from './pages/ItemDetail';
import FavItemDetail from './pages/FavItemDetail';
import ArtistDetail from './pages/ArtistDetail';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {

  // const [myFavorites, setMyFavorites] = useState<(string | null)[]>(
  //   ["B4MVBK2MMZPFEXRW4K7VU4BCSQA0PY","PVNGBKTKZA85W8MKDLLR8TD38V23CW"]
  // )

  const [myFavorites, setMyFavorites] = useState<(string | null)[]>(
    JSON.parse(localStorage.getItem('myFavorites') || "")
  )

  // useEffect(() => {
  //   localStorage.setItem('myFavorites', JSON.stringify(myFavorites))
  // }, [myFavorites])

  // const testFavorites = ["B4MVBK2MMZPFEXRW4K7VU4BCSQA0PY","PVNGBKTKZA85W8MKDLLR8TD38V23CW"]

  function addFavorite(id: string) {
    setMyFavorites(prevMyFavorites => [...prevMyFavorites, id])
  }

  function removeFavorite(id: string) {
    setMyFavorites(prevMyFavorites => prevMyFavorites.filter(fav => fav !== id))
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Tab1 />
            </Route>
            <Route exact path="/schedule">
              <Tab2 
                myFavorites={myFavorites}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
              />
            </Route>
            <Route path="/schedule/item/:id" >
              <ItemDetail 
                myFavorites={myFavorites}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
              />
            </Route>
            <Route exact path="/favorites">
              <Tab3
                myFavorites={myFavorites}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
              />
            </Route>
            <Route path="/favorites/item/:id" >
              <FavItemDetail 
                myFavorites={myFavorites}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
              />
            </Route>
            <Route exact path="/info">
              <Info />
            </Route>
            <Route exact path="/artists" >
              <Artists />
            </Route>
            <Route path="/artists/:id">
              <ArtistDetail />
            </Route>
            <Route exact path="/locations">
              <Locations />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/sponsors">
              <Sponsors />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/schedule">
              <IonIcon icon={calendar} />
              <IonLabel>Schedule</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/favorites">
              <IonIcon icon={heart} />
              <IonLabel>Favorites</IonLabel>
            </IonTabButton>
            <IonTabButton tab="info" href="/info">
              <IonIcon icon={informationCircle} />
              <IonLabel>Information</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  ) 
};

export default App;
