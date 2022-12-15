import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './ItemDetail.css';
import './demo.css';
import { RouteComponentProps } from 'react-router-dom';
import { useParams } from 'react-router';

// interface ItemDetailPageProps extends RouteComponentProps<{
//     id: string;
//   }> {}

const ItemDetail: React.FC = () => {

  return (
    <IonPage className="demo-body">
        <IonContent className="ion-padding demo-container" fullscreen>
          <ExploreContainer name={`Item Detail`} />
          test
        </IonContent>
    </IonPage>
  );
};

export default ItemDetail;