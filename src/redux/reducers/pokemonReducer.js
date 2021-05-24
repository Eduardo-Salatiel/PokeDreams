import {
  GET_POKEMON_CAROUSEL,
  GET_POKEMON_HERO,
  SET_LOADING_POKEMONS_CAROUSEL,
  SET_LOADING_POKEMONS_HERO,
  GET_POKEDEX,
  SET_LOADING_POKEDEX,
  ERROR_POKEDEX
} from "../types/types";

const initialState = {
  loadingPokeHero: false,
  loadingPokeCarousel: false,
  loadingPokedex: false,
  pokedex: {},
  pokemonsHero: [{},{},{},{}],
  error: false,
  pokemonsCarousel: sessionStorage.getItem('pokemon') ? JSON.parse(sessionStorage.getItem('pokemon')): [],
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_HERO:
      return {
        ...state,
        pokemonsHero: action.payload,
        loadingPokeHero: false,
      };
    case GET_POKEMON_CAROUSEL:
      return {
        ...state,
        pokemonsCarousel: action.payload,
        loadingPokeCarousel: false,
      };
    case GET_POKEDEX:
      return {
        ...state,
        pokedex: action.payload,
        loadingPokedex: !state.loadingPokedex,
        error: false
      }
    case SET_LOADING_POKEDEX: 
      return {
        ...state,
        loadingPokedex: !state.loadingPokedex
      }
    case SET_LOADING_POKEMONS_HERO:
      return {
        ...state,
        loadingPokeHero: action.payload,
      };
    case SET_LOADING_POKEMONS_CAROUSEL:
        return {
            ...state,
            loadingPokeCarousel: true
        }
    case ERROR_POKEDEX:
      return {
        ...state,
        loadingPokedex: false,
        error: true
      }
    default:
      return state;
  }
};
