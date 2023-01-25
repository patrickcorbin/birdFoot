import { IonLabel } from '@ionic/react';

const ErrorDisplay: React.FC<{error: any}> = ({ error }) => {
    if (!error) return null

    return (
        <>
            <div className="ion-padding">
                <IonLabel>{error?.message}</IonLabel>
            </div>
        </>
    )
}

export default ErrorDisplay