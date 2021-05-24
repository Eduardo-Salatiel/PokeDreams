import { useSelector } from "react-redux";
import { SpinnerCircular } from "spinners-react";
import Error from "../commons/Error";
import EmptyPokedex from "./EmptyPokedex";
import PokemonDetails from "./PokemonDetails";
import SearchBarContainer from "./SearchBarContainer";
import "./style.scss";

const Pokedex = () => {
  const { pokedex, loadingPokedex, error } = useSelector((state) => state.pokemonReducer);

  const Component = () => {
    if (error) return <Error />

    if (Object.keys(pokedex).length === 0) {
      return <EmptyPokedex />;
    } else {
      return <PokemonDetails pokemonData={pokedex} />;
    }
  };

  return (
    <div className="pokedex">
      <h2 className="pokedex-title">Pokédex</h2>
      <SearchBarContainer />
      {loadingPokedex ? (
        <div className="pokedex-loading">
          <SpinnerCircular color="#ef4036" size={100} />
        </div>
      ) : (
        <Component />
      )}
    </div>
  );
};

export default Pokedex;
