import { IonItemDivider, IonItemGroup, IonLabel} from '@ionic/react';
import ScheduleIonItem from '../components/ScheduleIonItem';
// import { scheduleData } from '../data/schedule.js';
import { usePerformances } from '../hooks/useFBQueries';

interface ContainerProps {
  dateFull: string;
  myFavorites: Array<any>;
  addFavorite: any;
  removeFavorite: any;
}

const ScheduleGroup: React.FC<ContainerProps> = ({ dateFull, myFavorites, addFavorite, removeFavorite }) => {

    const { data } = usePerformances()

    const groupDataFB = data?.filter(item => item.dateFull === dateFull)

    // const groupData = scheduleData.filter(item => item.dateFull === dateFull)

    const scheduleGroup = groupDataFB?.map(item => {
        return (
          <ScheduleIonItem 
            key={item.id}
            item={item}
            parentPage={'schedule'}
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