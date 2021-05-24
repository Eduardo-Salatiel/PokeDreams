import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemon } from '../redux/actions/pokemon';

export const useGetHeroPokemons = (arrSearch) => {
    const dispatch = useDispatch();
    const {pokemonsHero, loadingPokeHero} = useSelector(state => state.pokemonReducer);

    useEffect(() => {
        dispatch(getPokemon(arrSearch))
    }, []);
    
    return {pokemonsHero, loadingPokeHero};
}