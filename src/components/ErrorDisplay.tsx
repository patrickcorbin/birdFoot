import './ErrorDisplay.css';

interface ContainerProps {
    message: string;
  }

const ErrorDisplay: React.FC<ContainerProps> = ({ message }) => {
    return (
        <div className="error-container">
            <div className="error">
                <img className="logo" src="assets/BF23_Bird.png" alt="Birdfoot bird" />
                <h3>Uh oh!</h3>
                {/* <p>We can't seem to find what you're looking for...</p> */}
                <p>{message}</p>
            </div>
        </div>
    )
}

export default ErrorDisplay