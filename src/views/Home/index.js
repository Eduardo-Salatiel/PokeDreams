import { Fragment } from "react";
import Carousel from "../../components/Carousel";
import HeroCardsContainer from "../../components/HeroCardsContainer";
import Header from "../../components/layout/Header";
import "./style.scss";
import PokemonCard from "../../components/commons/PokemonCard";
import Footer from "../../components/layout/Footer";
import { useGetCarouselPokemons } from "../../hooks/useGetCarouselPokemons";

const Home = () => {
  const { pokemonsCarousel, loadingPokeCarousel} = useGetCarouselPokemons();

  return (
    <Fragment>
      <Header />
      <HeroCardsContainer />
      <Carousel itemWidth={300} loading={loadingPokeCarousel}>
        {pokemonsCarousel.map((pokemon, index) => (
          <div key={index} className="slick">
            <PokemonCard
              pokemonImage={pokemon.imgUrl}
              pokemonType={pokemon.types}
              pokemonName={pokemon.name}
              pokemonAbility={pokemon.ability}
            />
          </div>
        ))}
      </Carousel>

      <Footer />
    </Fragment>
  );
};

export default Home;
