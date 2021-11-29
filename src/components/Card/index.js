import React from "react";
import Male from "assets/male.png";
import Alive from "assets/Alive.png";
import Death from "assets/Death.png";
import Female from "assets/female.png";
import Unknown from "assets/Unknown.png";

const Card = ({ character }) => {
  return (
    <div className="cardCharacter">
      <div>
        <div className="containerInfo">
          <p>{character.name}</p>
          {character.gender === "Female" && (
            <span tooltip={character.gender}>
              <img src={Female} />
            </span>
          )}
          {character.gender === "Male" && (
            <span tooltip={character.gender}>
              <img src={Male} />
            </span>
          )}
          {character.gender === "unknown" && (
            <span tooltip={character.gender}>
              <p>?</p>
            </span>
          )}
        </div>
        <img src={character.image} />
        <span tooltip={character.status}>
          {character.status === "Alive" && <img src={Alive} />}
          {character.status === "Dead" && <img src={Death} />}
          {character.status === "unknown" && <img src={Unknown}/>}
        </span>
      </div>
      <div>
        <p>Species: {character.species}</p>
        <p>Location: {character.location.name}</p>
      </div>
    </div>
  );
};

export default Card;
