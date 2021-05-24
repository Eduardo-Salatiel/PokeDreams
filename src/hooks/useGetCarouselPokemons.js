import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsCarousel } from "../redux/actions/pokemon";
import { randomPokemons } from "../utils/RandomPokemons";


export const useGetCarouselPokemons = () => {
    const dispatch = useDispatch();
    const {pokemonsCarousel, loadingPokeCarousel} = useSelector(state => state.pokemonReducer);

    useEffect(() => {
        if(!sessionStorage.getItem('pokemon')) dispatch(getPokemonsCarousel(randomPokemons()))
    }, []);
    
    return {pokemonsCarousel, loadingPokeCarousel};
}