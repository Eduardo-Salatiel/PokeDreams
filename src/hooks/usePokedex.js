import { useState } from "react";
import { useDispatch} from "react-redux";
import { getPokedex } from "../redux/actions/pokemon";

export const usePokedex = () => {
  const [pokemonToSearch, setPokemonToSearch] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPokemonToSearch(e.target.value);
  };

  const handleSearchClick = () => {
      if (pokemonToSearch.trim() !== "") {
        dispatch(getPokedex(pokemonToSearch.toLowerCase()));
        setPokemonToSearch("");
      }
    }

  return { handleSearchClick, handleChange, pokemonToSearch };
};
