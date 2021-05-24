import { useGetHeroPokemons } from "./../../hooks/useGetHeroPokemons";
//-------------------------------------------------------------------
import GradientPokemonCard from './../commons/GradientPokemonCard';
import './style.scss';

const HeroCardsContainer = () => {
  const { pokemonsHero } = useGetHeroPokemons(["cyndaquil","vaporeon","mismagius","chikorita"]);

  return (
    <section className="hero-cards-container">
      {pokemonsHero.map((pokemon, index) => (
          <GradientPokemonCard
            key={index}
            pokemonName={pokemon?.name}
            pokemonType={pokemon.types}
            pokemonImage={pokemon?.imgUrl}
          />
      ))}
    </section>
  );
};

export default HeroCardsContainer;
