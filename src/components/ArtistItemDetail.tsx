import './ArtistItemDetail.css';

interface ContainerProps {
    id?: string;
    artist: string;
    imageFile: string;
    artistDescription: string[];
    artistWebsite: string | null;
  }
  
  const ArtistItemDetail: React.FC<ContainerProps> = ({ id, artist, imageFile, artistDescription, artistWebsite }) => {

    const descriptionDisplay = artistDescription.map(desc => <p key={Math.random()}>{desc}</p>)
    
    return (
      <div className="artistItemDetail">
        <img className="artistItemDetail__img" src={`./assets/images/${imageFile}`} alt={artist} />
        <div className="artistItemDetail__body">
            <h2>
                {artist}
            </h2>
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