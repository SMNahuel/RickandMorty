import React from "react";
import "../../sass/style.css";
import Alive from "../../assets/Alive.png";
import Death from "../../assets/Death.png";

const Card = ({ character }) => {
  return (
    <div class="cardCharacter">
      <div>
        <p>{character.name}</p>
        <img src={character.image} />
        <img src={character.status === "Alive" ? Alive : Death} />
      </div>
      <div>
          
      </div>
    </div>
  );
};

export default Card;
