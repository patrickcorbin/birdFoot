import './ErrorDisplay.css';

const ErrorDisplay: React.FC = () => {
    return (
        <div className="error-container">
            <div className="error">
                <img className="logo" src="assets/BF23_Bird.png" alt="Birdfoot bird" />
                <h3>Uh oh!</h3>
                <p>We can't seem to find what you're looking for...</p>
            </div>
        </div>
    )
}

export default ErrorDisplay