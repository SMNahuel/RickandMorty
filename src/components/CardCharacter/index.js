import Card from "../Card";
import ListEpisode from "../ListEpisode";

const CardCharacter = ({ character }) => {
/*   const saveCharVisit = () => {
    const charVisit = JSON.parse(localStorage.getItem("charVisit"));
    console.log(charVisit);
/*     if (charVisit) {
      const newCharVisit = [{
        [character.id]: {
          character,
        },
      }];
      localStorage.setItem("charVisit", JSON.stringify(newCharVisit));
    } else {
      const newCharVisit = [{
        [character.id]: {
          character,
        },
      }];
      charVisit.push(newCharVisit);
      localStorage.setItem("charVisit", JSON.stringify([charVisit]));
    } */

  return (
    <div className="characterContainer">
      <Card character={character} />

      <div className="espisodesContainer">
        <p>Episodios</p>
        {character &&
          character.episode.map((episode, index) => {
            return (
              <ListEpisode
                episode={episode}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CardCharacter;
