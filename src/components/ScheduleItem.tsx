import './ScheduleItem.css';

interface ContainerProps {
  name: string;
}

const ScheduleItem: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="exp-container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default ScheduleItem;