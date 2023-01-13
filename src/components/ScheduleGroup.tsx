import { IonItemDivider, IonItemGroup, IonLabel} from '@ionic/react';
import ScheduleIonItem from '../components/ScheduleIonItem';
import { scheduleData } from '../data/schedule.js'

interface ContainerProps {
  dateFull: string;
  myFavorites: Array<any>;
  addFavorite: any;
  removeFavorite: any;
}

const ScheduleGroup: React.FC<ContainerProps> = ({ dateFull, myFavorites, addFavorite, removeFavorite }) => {

    const groupData = scheduleData.filter(item => item.dateFull === dateFull)

    const scheduleGroup = groupData.map(item => {
        return (
          <ScheduleIonItem 
            key={item.id}
            id={item.id}
            parentPage={'schedule'}
            artist={item.artist}
            date={item.date}
            imageFile={item.imageFile}
            perfLocation={item.perfLocation}
            time={item.time}
            title={item.title}
            isFavorite={myFavorites.includes(item.id)}
            handleAdd={(e: TouchEvent) => {addFavorite(item.id); e.stopPropagation(); e.preventDefault();}}
            handleRemove={(e: any) => {removeFavorite(item.id); e.stopPropagation(); e.preventDefault();}}
          />
        )
      })

  return (
    <IonItemGroup>
        <IonItemDivider>
            <IonLabel>{dateFull}</IonLabel>
        </IonItemDivider>
        {scheduleGroup}
    </IonItemGroup>
  );
};

export default ScheduleGroup;