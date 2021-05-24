import Tilt from "react-parallax-tilt";
//-------------------------------------------------------------------------
import "./style.scss";

const GradientPokemonCard = ({ pokemonName, pokemonType, pokemonImage }) => {
  return (
    <Tilt className="gradient-pokemon" perspective={500}>
        <div className="gradient-pokemon-card">
          <div className={`image ${pokemonType}`}>
            <img src={pokemonImage} alt="pokemon"/>
          </div>
          <p className={`name ${pokemonType}`}>{pokemonName}</p>
          <p className={`type ${pokemonType}`}>{pokemonType}</p>
        </div>
    </Tilt>
  );
};

export default GradientPokemonCard;
