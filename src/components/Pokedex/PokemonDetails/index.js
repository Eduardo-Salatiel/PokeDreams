import Details from "./Details";
import PokedexImageContainer from "./PokedexImageContainer";
import "./style.scss";

const PokemonDetails = ({ pokemonData }) => {

  return (
    <div className="pokemon-details">
      <h3 className="pokemon-name">
        {pokemonData.name} <span> N.°{pokemonData.id}</span>
      </h3>
      <PokedexImageContainer imgUrl={pokemonData.imgUrl} />
      <Details pokemonDetails={pokemonData} />
    </div>
  );
};

export default PokemonDetails;
