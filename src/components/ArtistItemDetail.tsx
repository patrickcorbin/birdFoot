import './ArtistItemDetail.css';

interface ContainerProps {
    id?: string;
    artist: string;
    imageFile: string;
    specialty: string;
    artistDescription: string[];
    artistWebsite: string | null;
  }
  
  const ArtistItemDetail: React.FC<ContainerProps> = ({ artist, imageFile, specialty, artistDescription, artistWebsite }) => {

    // const { artist, imageFile, artistDescription, artistWebsite } = artistObj

    const descriptionDisplay = artistDescription?.map(desc => <p key={Math.random()}>{desc}</p>)
    
    return (
      <div className="artistItemDetail">
        <img className="artistItemDetail__img" src={`./assets/images/${imageFile}`} alt={artist} />
        <div className="artistItemDetail__body">
            <h2 className="artistItemDetail__title">
                {artist}
            </h2>
            <p className="artistItemDetail__specialty">
                {specialty}
            </p>
            {descriptionDisplay}
            {
                artistWebsite && <p>
                    For more information, please visit <a target="_blank" rel="noopener noreferrer" href={artistWebsite ? artistWebsite : '#'}>{artistWebsite}</a>
                </p>
            }
        </div>
      </div>
    );
  };
  
  export default ArtistItemDetail;