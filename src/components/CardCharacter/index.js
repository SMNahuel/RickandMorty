import Card from "../Card";
import ListEpisode from "../ListEpisode";

const CardCharacter = ({ character }) => {
  return (
    <div className="characterContainer">
      <Card character={character} />

      <div className="espisodesContainer">
          <p>Episodios</p>
          {
              character && character.episode.map((episode,index) => {
                  return <ListEpisode episode={episode} key={index}/>
              })
          }
      </div>
    </div>
  );
};

export default CardCharacter;
