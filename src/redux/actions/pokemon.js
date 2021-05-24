import {
  GET_POKEMON_CAROUSEL,
  GET_POKEMON_HERO,
  SET_LOADING_POKEMONS_HERO,
  SET_LOADING_POKEMONS_CAROUSEL,
  SET_LOADING_POKEDEX,
  GET_POKEDEX,
  ERROR_POKEDEX,
} from "../types/types";
import { pokeApiInstance } from "./../../api/apiPokemonCall";

export const getPokemon = (pokemons = []) => async(dispatch) => {
    const pokemonArr = [];
    try {
      dispatch({
        type: SET_LOADING_POKEMONS_HERO,
        payload: true,
      });
        for await (const pokemon of pokemons) {
          const resp = await pokeApiInstance.get(`/pokemon/${pokemon}`);
          pokemonArr.push({
            id: resp.data.id,
            name: resp.data.name,
            imgUrl: resp.data.sprites.other.dream_world.front_default,
            types: resp.data.types[0].type.name,
            ability: resp.data.abilities[0].ability.name,
          });
        }
        dispatch({
          type: GET_POKEMON_HERO,
          payload: pokemonArr,
        });
       
        ;
      
    } catch (error) {
      console.log(error);
    }
  };

  export const getPokemonsCarousel = (pokemons =[]) => async(dispatch) =>  {
    const pokemonArr = [];
    
    dispatch({
      type: SET_LOADING_POKEMONS_CAROUSEL,
      payload: true,
    });
    try {
      for await (const pokemon of pokemons) {
        const resp = await pokeApiInstance.get(`/pokemon/${pokemon}`);
        pokemonArr.push({
          id: resp.data.id,
          name: resp.data.name,
          imgUrl: Object.values(resp.data.sprites.other)[1].front_default,
          types: resp.data.types[0].type.name,
          ability: resp.data.abilities[0].ability.name,
        });
      }
      sessionStorage.setItem("pokemon",JSON.stringify(pokemonArr))
      dispatch({
        type: GET_POKEMON_CAROUSEL,
        payload: pokemonArr,
      })
    } catch (error) {
      console.log(error);
    }
  }

  export const getPokedex = (pokemon) => async(dispatch) => {
    dispatch({type: SET_LOADING_POKEDEX});
    try {
      const respPokemon = await pokeApiInstance.get(`/pokemon/${pokemon}`);
      const respPokeDescription = await pokeApiInstance.get(`/pokemon-species/${pokemon}`);

      dispatch({
        type: GET_POKEDEX,
        payload: {
          id: respPokemon.data.id,
          name: respPokemon.data.name,
          description: respPokeDescription.data.flavor_text_entries[2].flavor_text.replace("", " "),
          ability: respPokemon.data.abilities[0].ability.name,
          generation: respPokeDescription.data.generation.name,
          shape: respPokeDescription.data.shape.name,
          height: (respPokemon.data.height * 10) / 100,
          weight: (respPokemon.data.weight * 0.1).toFixed(1),
          imgUrl: Object.values(respPokemon.data.sprites.other)[1].front_default,
          types: respPokemon.data.types[0].type.name,
        }
      })

    } catch (error) {
      dispatch({type: ERROR_POKEDEX})
    }
  }
